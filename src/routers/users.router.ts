import { Router } from "express";
import { deleteUserController, getUsersController, patchUserController, postUserController } from "../controllers";
import { validateBody, verifyAdmin, verifyEmail, verifyPatchAuth, verifyToken } from "../middlewares";
import { postUserSchema } from "../schemas";


const usersRouter:Router = Router()

usersRouter.post('', validateBody(postUserSchema), verifyEmail, postUserController)
usersRouter.get('', verifyToken, verifyAdmin, getUsersController)
usersRouter.patch('/:id', verifyPatchAuth, patchUserController)
usersRouter.delete('/:id', verifyToken, verifyAdmin, deleteUserController)


export default usersRouter