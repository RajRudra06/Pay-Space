import { z } from "zod";

export const userSchema = z.object({
    email: z.string().email(),
    username: z.string(),
    number: z.string().regex(/^\d{10}$/),
    password: z.string().min(6),
});