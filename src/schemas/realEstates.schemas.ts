import { z } from "zod";

export const postRealEstateSchema = z.object({
    value: z.union([z.number().multipleOf(0.01), z.string()]),
    size: z.number(),
    adress: z.object({
        street: z.string().max(45),
        zipCode: z.string().max(8),
        number: z.number().positive(),
        city: z.string().max(20),
        state: z.string().max(2)
    }),
    categoryId: z.number()
})