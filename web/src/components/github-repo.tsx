import { OctokitResponseRepos } from "@/lib/github";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import { GithubProjectListItem } from "./clone-button";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default async function GithubRepos({
  repos,
}: {
  repos: OctokitResponseRepos;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
          <Card>
            <CardHeader  className="h-full basis-1/2 flex justify-center items-center rounded-lg shadow-lg border-2 border-[#d9d9d920] bg-[#1c1c1c]">
              <CardTitle>Open Repository</CardTitle>
              <CardDescription>
                Use a github repository as a starting point.
              </CardDescription>
            </CardHeader>
          </Card>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Open Github Repository</DialogTitle>
          <DialogDescription>
            Start a project from your github repositories.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="min-h-[200px] max-h-[600px] w-full rounded-md border p-4">
          {repos &&
            repos.data.map((repo, index) => (
              <React.Fragment key={index}>
                <GithubProjectListItem
                  id={repo.id}
                  name={repo.name}
                  description={repo.description}
                  githubUrl={repo.html_url}
                />
                <Separator />
              </React.Fragment>
            ))}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
