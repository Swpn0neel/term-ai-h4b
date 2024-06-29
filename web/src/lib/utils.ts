import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function apiRoute(path: string) {
  const root = process.env.API_URL
  if (root === undefined) {
    throw new Error("API_URL env variable is not set")
  }
  return `${root}${path}`
}

export function socketRoute(path: string) {
  const root = process.env.SOCKET_URL
  if (!root) {
    throw new Error("SOCKET_URL env variable is not set")
  }
  return `${root}${path}`
}