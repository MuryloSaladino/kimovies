import { z } from "zod";

export const postScheduleSchemas = z.object({
    date: z.string().datetime().length(10),
    hour: z.string().length(5),
    realStateId: z.number()
})