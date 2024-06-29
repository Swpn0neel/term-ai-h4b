export function apiRoute(path: string) {
    const root = process.env.API_URL
    if (!root) {
        throw new Error("API_URL env variable is not set")
    }
    return `${root}${path}`
}