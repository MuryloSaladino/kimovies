import { Request, Response } from "express";
import { createCategoryService, readCategoriesService, readRealEstatesFromCategoryService } from "../services";

export const postCategoryController = async (req:Request, res:Response) => {

    const service = await createCategoryService(req.body)

    return res.status(201).json(service)
}

export const getCategoriesController = async (req:Request, res:Response) => {

    const service = await readCategoriesService()

    return res.status(200).json(service)
}

export const getRealEstatesFromCategoryController = async (req:Request, res:Response) => {

    const service = await readRealEstatesFromCategoryService(Number(req.params.id))

    return res.status(200).json(service)
}