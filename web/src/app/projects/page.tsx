import ProjectsTable from "@/components/projects-table";
import { getGithubClient, getRepos } from "@/lib/github";
import { UserButton } from "@clerk/nextjs";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import React from "react";
import CreateButtons from "@/components/create-buttons";

export default async function Page() {
  const user = await currentUser();

  if (!user) {
    console.log("No user");
    return <p>No user</p>;
  }

  const tokens = await clerkClient.users.getUserOauthAccessToken(
    user?.id,
    "oauth_github",
  );
  const ocktokit = getGithubClient(tokens.data[0].token);
  const repos = await getRepos(ocktokit);

  // const queryClient = new QueryClient()

  // await queryClient.prefetchQuery({
  //   queryKey: ["repos", user?.id],
  //   queryFn: async () => await getRepos(ocktokit),
  // });

  return (
    <div className="">
      {/* <div className='flex items-center justify-start gap-4'>
      <div className="flex items-center justify-start font-medium text-xl">
        <div className="flex items-center">
          <span className="text-white">Term</span>
          <span className="text-[#3ECF99]">AI</span>
        </div>
      </div>
        <UserButton />
      </div> */}

      <div className="h-[10vh] flex justify-between border-b-2 border-[#d9d9d920] py-4 md:py-6 px-12 md:px-40">
        <div className="flex items-center justify-start font-medium text-xl">
          <div className="flex items-center">
            <span className="text-white">Term</span>
            <span className="text-[#3ECF99]">AI</span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <UserButton />
        </div>
      </div>
      <div className="h-[90vh] py-8 md:py-12 px-12 lg:px-40 text-white">
        <div className="h-full flex flex-col gap-12 max-md:gap-4">
          
          <CreateButtons repos={repos} />

          <div className="basis-3/5 max-md:pt-4">
            <div className="text-4xl md:text-5xl font-roboto pb-6">
              <span className="text-[#3ECF99]">R</span>ecent Terminals
            </div>
            <div className="max-h-64 overflow-y-auto pr-2 scrollbar-custom">
              <ProjectsTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
