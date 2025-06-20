export interface CustomUser {
    id: string;
    email: string;
    username: string;
    number: string;
}

export interface CustomToken {
    id?: string;
    email?: string | null;
    username?: string;
    number?: string;
    role?: string;
}

export interface CustomSession {
    user: {
        id: string;
        email: string;
        username: string;
        number: string;
        role?: string;
        name?: string | null;
        image?: string | null;
    };
    expires: string;
}