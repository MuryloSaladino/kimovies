import { Router } from "express";
import { validateBody, verifyAdmin, verifySchedule, verifyToken } from "../middlewares";
import { postScheduleSchemas } from "../schemas";
import { getSchedulesFromRealEstateController, postScheduleController } from "../controllers/schedules.controllers";

const schedulesRouter:Router = Router()

schedulesRouter.post('', verifyToken, verifySchedule, validateBody(postScheduleSchemas), postScheduleController)
schedulesRouter.get('/realEstate/:id', verifyToken, verifyAdmin, getSchedulesFromRealEstateController)


export default schedulesRouter