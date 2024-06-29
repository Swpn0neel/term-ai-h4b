import { Octokit } from "octokit"

export type OctokitClient = ReturnType<typeof getGithubClient>
export type OctokitResponseRepos = Awaited<ReturnType<typeof getRepos>>

export const getGithubClient = (oauthToken: string) => {
  return new Octokit({
    auth: oauthToken
  })
}

export const getRepos = async (octokit: OctokitClient, username: string) => {
  return (await octokit.rest.repos.listForUser({ username, type: "all" }))
}