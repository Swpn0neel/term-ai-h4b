import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";
import pty from "node-pty";
import { exec } from "child_process";
import fs from "fs"
import path from "path";

const app = express();
const server = createServer(app);

app.use(cors({origin: "*"}));

const io = new Server(server, {
  cors: {
    origin: "*",
    credentials: true,
  },
});

// spawn a pseudo shell
// default shell = bash
const ptyProcess = pty.spawn("bash", [], {
  name: "xterm-color",
  cols: 80,
  rows: 30,
  cwd: process.env.HOME,
  env: process.env,
});

io.engine.on("connection_error", console.log)

io.on("connection", (socket) => {
  console.log("SOCKET: new connection with id", socket.id);

  // lifecyle events
  socket.on("ly:clone", async (message) => {
    const { name } = message;

    if (!message.githubUrl) {
      socket.emit("ly:clone:failed", { message: "Github url is required" })
      return
    }

    const githubUrl = message.githubUrl
    const isCloned = fs.existsSync(path.join(process.cwd(), "apps", name))

    if (!isCloned) {
      exec(`bash ./scripts/clone.sh ${githubUrl} ${name}`, (error, stdout, stderr) => {
        console.log(error, stdout, stderr)
        if (error) {
          socket.emit("ly:error", { error, stdout, stderr })
          return
        }
        socket.emit("ly:clone:success", { stdout, stderr })
      })
      return
    }
    socket.emit("ly:clone:success", {})
    // socket.emit("ly:error", { message: "INTERR: Cloning failed (Possible reasons - No github url provided or project name already exists.)" })
    // socket.emit("ly:error", { message: "INTERR: Cloning failed (Possible reasons - No github url provided or project name already exists.)" })
  })

  socket.on("ly:setup", async (message) => {
    const { name } = message;
    const isCreated = fs.existsSync(path.join(process.cwd(), "apps", name))

    if (!isCreated) {
      exec(`bash ./scripts/setup.sh ${name}`, (error, stdout, stderr) => {
        console.log(error, stdout, stderr)
        if (error) {
          socket.emit("error", error)
          socket.emit("ly:error", { error, stdout, stderr })
          return
        }
        socket.emit("ly:setup:success", { stdout, stderr })
        return
      })
      return
    }
    socket.emit("ly:clone:success", {})
    // socket.emit("ly:error", { message: "INTERR: App already exists, cannot create." })
  })

  socket.on("ly:save", async (message) => {
    socket.emit("ly:save:success", {})
  })

  // shell events
  socket.on("shell:input", async (message) =>
    ptyProcess.write(message.command),
  );

  socket.on("shell:resize", (message) => {
    ptyProcess.resize(message.cols, message.rows);
  });

  ptyProcess.onData((data) => socket.emit("shell:data", { data }));

  ptyProcess.onExit((data) => socket.emit("shell:exit", data));
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok" }).send();
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));