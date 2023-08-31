import { NextFunction, Request, Response } from "express"

export const validateBody = (schema:Zod.ZodTypeAny) => (req:Request, res:Response, next:NextFunction) => {

    const validated = schema.parse(req.body)

    req.body = validated

    return next()
}