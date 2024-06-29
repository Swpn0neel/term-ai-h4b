import { Hono } from "hono"
import prisma from "@/lib/prisma"
import { HTTPException } from "hono/http-exception"
import { createProjectSchema, updateProjectSchema } from "@/lib/schema"

const projects = new Hono()

projects.get("/:id", async (ctx) => {
    const { id } = ctx.req.param()
    const project = await prisma.project.findUnique({
        where: { id },
        select: {
            id: true,
            name: true,
            userId: true,
            githubUrl: true,
            createdAt: true,
            updatedAt: true,
            user: true
        }
    })
    if (!project) {
        throw new HTTPException(404, { message: "Project not found" })
    }
    return ctx.json(project, { status: 200 })
})



projects.post("/", async (ctx) => {
    const body = createProjectSchema.safeParse(await ctx.req.json())
    if (!body.success) {
        throw new HTTPException(422, { message: "Invalid data" })
    }
    const { name, userId, githubUrl } = body.data
    const project = await prisma.project.create({
        data: { name, userId, githubUrl },
        select: {
            id: true,
            name: true,
            userId: true,
            githubUrl: true,
            createdAt: true,
            updatedAt: true,
            user: false
        }
    })
    return ctx.json(project, { status: 200 })
})



projects.patch("/:id", async (ctx) => {
    const { id } = ctx.req.param()
    const body = updateProjectSchema.safeParse(ctx.req.json())
    if (!body.success) {
        throw new HTTPException(422, { message: "Invalid data" })
    }
    const { name, githubUrl } = body.data
    const project = await prisma.project.update({
        where: { id },
        data: { name, githubUrl },
        select: {
            id: true,
            name: true,
            userId: true,
            githubUrl: true,
            createdAt: true,
            updatedAt: true,
            user: false
        }
    })
    return ctx.json(project, { status: 200 })
})



projects.delete("/:id", async (ctx) => {
    const { id } = ctx.req.param()
    await prisma.project.delete({
        where: { id }
    })
    return ctx.json({}, { status: 200 })
})

export { projects as projectsRouter }