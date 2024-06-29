"use client"

import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GithubProjectListItem } from "@/components/clone-button";
import { Separator } from "@/components/ui/separator";
import { OctokitResponseRepos } from '@/lib/github';

export default function CreateButtons({ repos }: { repos: OctokitResponseRepos }) {
    return (
        <div className="h-full flex basis-2/5 gap-16 text-xl max-md:flex-col max-md:gap-4">
            <Card className="h-full flex basis-1/2 justify-center items-center rounded-lg shadow-lg border-2 border-[#d9d9d920] bg-[#1c1c1c]">
                <CardHeader className="space-y-2 items-center justify-center">
                    <CardTitle>Start empty project</CardTitle>
                    <CardDescription>
                        Start a new project from scratch.
                    </CardDescription>
                </CardHeader>
            </Card>

            <Dialog>
                <DialogTrigger asChild>
                    <Card className="h-full flex basis-1/2 justify-center items-center rounded-lg shadow-lg border-2 border-[#d9d9d920] bg-[#1c1c1c]">
                        <CardHeader className="space-y-2 items-center justify-center">
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
        </div>
    )
}
