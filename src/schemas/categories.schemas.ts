import { z } from "zod";

export const postCategorySchema = z.object({
    name: z.string().max(45)
})