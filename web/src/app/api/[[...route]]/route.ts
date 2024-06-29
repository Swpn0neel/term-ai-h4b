import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { Hono } from 'hono'
import { handle } from "hono/vercel";
import { HTTPException } from 'hono/http-exception';
import { projectsRouter, usersRouter } from '@/routes';

const app = new Hono().basePath("/api")

app.get("/health", (ctx) => ctx.json({ status: "ok" }))

app.route("/users", usersRouter)
app.route("/projects", projectsRouter)

app.onError((err, ctx) => {
  console.log(err);
  if (err instanceof HTTPException) return err.getResponse();
  else if (err instanceof PrismaClientKnownRequestError) {
    switch (err.code) {
      case "P2002":
        return new HTTPException(409).getResponse();
    }
  }
  return ctx.json({}, { status: 400 });
});

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);