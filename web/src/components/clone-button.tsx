"use client";

import { useMutation } from "@tanstack/react-query";
import { Button } from "./ui/button";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { nanoid } from "nanoid";

export function GithubProjectListItem({
  id,
  name,
  description,
  githubUrl,
}: {
  id: number;
  name: string;
  description: string | null;
  githubUrl: string | null;
}) {
  const router = useRouter();
  const { user } = useUser();

  const createProjectMutation = useMutation({
    mutationKey: ["projects"],
    mutationFn: async () => {
      console.log(user);
      if (!user) {
        return;
      }

      const res = await axios.post("/api/projects", {
        name: `${name}-${nanoid(4)}`,
        userId: user.id,
        githubUrl,
      });
      return res.data;
    },
    onSuccess(data) {
      router.push(`/projects/${data.id}`);
    },
  });

  const onClick = () => {
    createProjectMutation.mutate();
  };

  return (
    <div className="flex items-center gap-4 px-4 py-4">
      <div className="w-full space-y-1" key={id}>
        <h3 className="font-semibold leading-none tracking-tight">{name}</h3>
        <h4 className="text-sm text-muted-foreground line-clamp-1">
          {description}
        </h4>
      </div>
      <Button onClick={onClick}>
        {createProjectMutation.isPending ? "Cloning..." : "Clone"}
      </Button>
    </div>
  );
}
