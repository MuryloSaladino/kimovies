import { z } from "zod";

export const postScheduleSchemas = z.object({
    date: z.string(),
    hour: z.string().length(5),
    realEstateId: z.number()
})