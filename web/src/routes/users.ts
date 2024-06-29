import prisma from "@/lib/prisma"
import { createUserSchema, updateUserSchema } from "@/lib/schema"
import { Hono } from "hono"
import { HTTPException } from "hono/http-exception"

const users = new Hono()


users.get("/:id", async (ctx) => {
    const { id } = ctx.req.param()
    const user = await prisma.user.findUniqueOrThrow({
        where: { id },
        select: {
            id: true,
            userId: true,
            email: true,
            name: true,
            createdAt: true,
            updatedAt: true,
            projects: false
        }
    })
    if (!user) {
        throw new HTTPException(404)
    }
    return ctx.json(user, { status: 200 })
})



users.post("/", async (ctx) => {
    const body = createUserSchema.safeParse(await ctx.req.json())
    if (!body.success) {
        throw new HTTPException(422, { message: "Invalid data" })
    }
    const { email, name, userId, ghUsername } = body.data
    const user = await prisma.user.create({
        data: { email, name, userId, ghUsername },
        select: {
            id: true,
            userId: true,
            email: true,
            name: true,
            createdAt: true,
            updatedAt: true,
            projects: false
        }
    })
    return ctx.json(user, { status: 200 })
})



users.delete("/:id", async (ctx) => {
    const { id } = ctx.req.param()
    await prisma.user.delete({
        where: { id }
    })
    return ctx.json({}, { status: 200 })
})



users.put("/:id", async (ctx) => {
    const { id } = ctx.req.param()
    const body = updateUserSchema.safeParse(ctx.req.json())
    if (!body.success) {
        throw new HTTPException(422, { message: "Invalid data" })
    }
    const { name, email } = body.data
    await prisma.user.update({
        where: { id },
        data: { name, email }
    })
    return ctx.json({}, { status: 200 })
})



users.get("/:userId/projects", async (ctx) => {
    const { userId } = ctx.req.param()
    const projects = await prisma.project.findMany({
        where: { userId },
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
    if (!projects) {
        throw new HTTPException(404)
    }
    return ctx.json(projects, { status: 200 })
})


export { users as usersRouter }