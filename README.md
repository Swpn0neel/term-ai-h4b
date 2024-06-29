# TermAI

## Installation Guide

### Setting up socket server:
- To start socket server go to `server` folder.
- Provide env variables `APP_URL` & `API_URL` for frontend and backend server respectively.
- Run `npm install` or `pnpm install` to install dependencies.
- Start server using `npm run dev` or `pnpm dev` (runs in port `3000` by default).

Socket server must be running while working with the frontend terminal.

### Setting up frontend and backend api:
- To start frontend go to `web` folder.
- Create .env file and provide the env variables shown in .env.example file.
- Run `npm install` or `pnpm install` to install dependencies.
- Start server using `npm run dev` or `pnpm dev` (runs in port `4000` by default).

## Tech Stack
- Typescript, Next.js, Socket.io, MongoDB, Docker, Google Cloud Run