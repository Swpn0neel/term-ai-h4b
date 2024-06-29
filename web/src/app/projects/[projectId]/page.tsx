"use client";

import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
import Terminal from "@/components/terminal";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { DialogContent } from "@radix-ui/react-dialog";
import { FieldValues, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import LoadingSpinner from "@/components/loading-spinner";

export default function Page({
  params: { projectId },
}: {
  params: { projectId: string };
}) {
  const SOCKET_URL =
    process.env.SOCKET_URL ||
    "https://term-ai-socket-server-bwvgjyky6q-el.a.run.app";
  console.log(SOCKET_URL);
  const socket = useRef(io(SOCKET_URL));
  const [statusMessage, setStatusMessage] = useState<string | null>(
    "Connecting...",
  );

  const projectQuery = useQuery({
    queryKey: ["project", projectId],
    queryFn: async () => {
      const res = await axios.get<ProjectWithUser>(
        `/api/projects/${projectId}`,
      );
      return res.data;
    },
    enabled: !!projectId,
  });

  useEffect(() => {
    socket.current.on("ly:error", (message) => {
      setStatusMessage(message.message);
    });

    socket.current.on("ly:clone:success", () => {
      setStatusMessage(null);
      socket.current.emit("shell:input", { command: "\r" });
    });
  }, []);

  useEffect(() => {
    if (!projectQuery.data) return;

    const {
      name,
      githubUrl,
      user: { ghUsername },
    } = projectQuery.data;

    if (!githubUrl) {
      socket.current.emit("ly:setup", { name });
    } else {
      socket.current.emit("ly:clone", { name, ghUsername, githubUrl });
    }
  }, [projectQuery.data]);

  if (projectQuery.isLoading) {
    return (
      <div className="flex items-center justify-center">
        <LoadingSpinner />
      </div>
    )
  }

  if (projectQuery.isError) {
    return <p>Error: {projectQuery.error.message}</p>;
  }

  if (!projectQuery.data) {
    return <p>Project not found</p>;
  }

  return (
    <div>
      <div className="h-[56px] flex items-center justify-between px-8">
        <Link href={"/projects"}><Button>Back</Button></Link>
        <p>{projectQuery.data.name}</p>
        <Button>Save</Button>
      </div>

      {statusMessage && (
        <div>
          <p>{statusMessage}</p>
        </div>
      )}

      {!statusMessage && (
        <div className="w-full h-[calc(100vh-56px)] px-8">
          <Terminal socket={socket.current} />
        </div>
      )}
    </div>
  );
}