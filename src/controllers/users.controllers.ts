import { Request, Response } from "express"
import { createUserService, deleteUserService, readUsersService, updateUserService } from "../services"

export const postUserController = async (req:Request, res:Response) => {

    const service = await createUserService(req.body)

    return res.status(201).json(service)
}

export const getUsersController = async (req:Request, res:Response) => {

    const service = await readUsersService()

    return res.status(200).json(service)
}

export const patchUserController = async (req:Request, res:Response) => {

    const service = await updateUserService(Number(req.params.id), req.body)

    return res.status(200).json(service)
}

export const deleteUserController = async (req:Request, res:Response) => {

    await deleteUserService(Number(req.params.id))

    return res.status(204).send()
}