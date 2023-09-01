import { NextFunction, Request, Response } from "express"
import { AppError } from "../errors"
import { verify } from "jsonwebtoken"

export const validateBody = (schema:Zod.ZodTypeAny) => (req:Request, res:Response, next:NextFunction) => {

    const validated = schema.parse(req.body)

    req.body = validated

    return next()
}

export const validateToken = async (req:Request, res:Response, next:NextFunction) => {

    const auth:string|undefined = req.headers.authorization

    if(!auth) {
        throw new AppError("Missing bearer token", 401)
    }

    const [_bearer, token] = auth.split(" ")

    verify(
        token,
        String(process.env.SECRET_KEY),
        (err:any, decoded:any) => {
            if(err) {
                throw new AppError(err.message, 401)
            }
            res.locals.email = decoded.email
            res.locals.admin = decoded.admin
        }
    )

    return next()
}

export const validateAdmin = async (req:Request, res:Response, next:NextFunction) => {

    if(!res.locals.admin) {
        throw new AppError("Insufficient permission", 403)
    }

    return next()
}