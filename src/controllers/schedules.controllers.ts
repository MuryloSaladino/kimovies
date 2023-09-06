import { Request, Response } from "express";
import { createScheduleService, readSchedulesFromRealEstateService } from "../services";

export const postScheduleController = async (req:Request, res:Response) => {

    await createScheduleService(req.body, Number(res.locals.user.id))

    return res.status(201).json({ message: "Schedule created" })
}

export const getSchedulesFromRealEstateController = async (req:Request, res:Response) => {

    const service = await readSchedulesFromRealEstateService(Number(req.params.id))

    return res.status(200).json(service)
}