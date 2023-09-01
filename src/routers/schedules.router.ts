import { getSchedulesFromRealEstateController, postScheduleController } from "../controllers/schedules.controllers";
import { validateAdmin, validateBody, validateToken, verifySchedule } from "../middlewares";
import { postScheduleSchemas } from "../schemas";
import { Router } from "express";

const schedulesRouter:Router = Router()

schedulesRouter.post('', validateToken, verifySchedule, validateBody(postScheduleSchemas), postScheduleController)
schedulesRouter.get('/realEstate/:id', validateToken, validateAdmin, getSchedulesFromRealEstateController)


export default schedulesRouter