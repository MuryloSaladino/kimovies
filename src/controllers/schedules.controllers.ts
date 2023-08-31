import { Request, Response } from "express";
import { createScheduleService, readSchedulesFromRealEstateService } from "../services";

export const postScheduleController = async (req:Request, res:Response) => {

    const service = await createScheduleService(req.body)

    return res.status(201).json(service)
}

export const getSchedulesFromRealEstateController = async (req:Request, res:Response) => {

    const service = await readSchedulesFromRealEstateService(Number(req.params.id))

    return res.status(201).json(service)
}