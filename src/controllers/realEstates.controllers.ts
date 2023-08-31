import { Request, Response } from "express";
import { createRealEstateService, readRealEstateService } from "../services";


export const postRealEstateController = async (req:Request, res:Response) => {
    
    const service = await createRealEstateService(req.body)

    return res.status(201).json(service)
}

export const getRealEstatesController = async (req:Request, res:Response) => {
    
    const service = await readRealEstateService()

    return res.status(200).json(service)
}