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
import { QueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Project } from "@prisma/client";
import Link from "next/link";

export default function ProjectsTable() {
  const { user } = useUser();

  // const queryClient = new QueryClient()

  const projectsQuery = useQuery({
    queryKey: ["projects", user?.id],
    queryFn: async () => {
      const res = await axios.get(`/api/users/${user?.id}/projects`);
      return res.data as Project[];
    },
    enabled: !!user,
  });

  if (projectsQuery.isLoading || projectsQuery.isError || !projectsQuery.data) {
    return <p>Loading...</p>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Repository</TableHead>
          <TableHead>Created</TableHead>
          <TableHead>Updated</TableHead>
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
            <TableCell>{new Date(project.createdAt).toDateString()}</TableCell>
            <TableCell>{new Date(project.updatedAt).toDateString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
