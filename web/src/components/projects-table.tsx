"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useUser } from "@clerk/nextjs";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Project } from "@prisma/client";
import Link from "next/link";
import { Button } from "./ui/button";
import { toast } from "sonner";

export default function ProjectsTable() {
  const { user } = useUser();

  const queryClient = new QueryClient()

  const projectsQuery = useQuery({
    queryKey: ["projects", user?.id],
    queryFn: async () => {
      const res = await axios.get(`/api/users/${user?.id}/projects`);
      return res.data as Project[];
    },
    enabled: !!user,
  });

  const deleteProjectsMutation = useMutation({
    mutationFn: async (projectId: string) => {
      await axios.delete(`/api/projects/${projectId}`);
    },
    onSuccess: () => {
      toast("Project deleted successfully.")
      window.location.reload()
      queryClient.invalidateQueries({ queryKey: ["projects", user?.id] });
      queryClient.refetchQueries({ queryKey: ["projects", user?.id] })
    },
  })

  if (projectsQuery.isLoading || projectsQuery.isError || !projectsQuery.data) {
    return <p>Loading...</p>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Repository</TableHead>
          <TableHead>Updated</TableHead>
          <TableHead>{""}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projectsQuery.data.map((project) => (
          <TableRow key={project.id} className="h-[56px]">
            <TableCell className="font-medium">
              <Link href={`/projects/${project.id}`}>{project.name}</Link>
            </TableCell>
            <TableCell>
              <Link href={project.githubUrl ?? "#"}>
                {project.githubUrl?.replace("https://github.com/", "")}
              </Link>
            </TableCell>
            <TableCell>{new Date(project.updatedAt).toDateString()}</TableCell>
            <TableCell><Button onClick={() => {
              deleteProjectsMutation.mutate(project.id)
              console.log("deleted")
            }}>Delete</Button></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
