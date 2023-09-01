import { deleteUserController, getUsersController, patchUserController, postUserController } from "../controllers";
import { validateAdmin, validateBody, validateToken, verifyEmail, verifyPatchAuth } from "../middlewares";
import { postUserSchema } from "../schemas";
import { Router } from "express";


const usersRouter:Router = Router()

usersRouter.post('', validateBody(postUserSchema), verifyEmail, postUserController)
usersRouter.get('', validateToken, validateAdmin, getUsersController)
usersRouter.patch('/:id', verifyPatchAuth, patchUserController)
usersRouter.delete('/:id', validateToken, validateAdmin, deleteUserController)


export default usersRouter