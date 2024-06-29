import { z } from "zod";

export const createProjectSchema = z.object({
    name: z.string(),
    userId: z.string(),
    githubUrl: z.string().optional(),
})

export const updateProjectSchema = z.object({
    name: z.string().optional(),
    githubUrl: z.string().optional()
})

export const createUserSchema = z.object({
    email: z.string().email(),
    name: z.string().optional(),
    userId: z.string(),
    ghUsername: z.string()
})

export const updateUserSchema = z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
    ghUsername: z.string().optional()
})