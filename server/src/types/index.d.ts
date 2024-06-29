type Project = {
    id: string;
    name: string;
    userId: string;
    githubUrl: string | null;
    createdAt: Date;
    updatedAt: Date;
}

type ProjectWithUser = {
    id: string;
    name: string;
    userId: string;
    githubUrl: string | null;
    createdAt: Date;
    updatedAt: Date;
    user: {
        id: string;
        userId: string;
        email: string;
        ghUsername: string;
        name: string | null;
        createdAt: Date;
        updatedAt: Date;
    };
} | null