import { z } from "zod";

export const postRealEstateSchema = z.object({
    value: z.union([z.string(), z.number().multipleOf(0.01)]),
    size: z.number().int().positive(),
    address: z.object({
        street: z.string().max(45),
        zipCode: z.string().max(8),
        number: z.number().positive(),
        city: z.string().max(20),
        state: z.string().max(2)
    }),
    categoryId: z.number().int()
})