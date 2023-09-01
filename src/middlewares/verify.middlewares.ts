import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";


export const verifyEmail = async (req:Request, res:Response, next:NextFunction) => {

    const userRepo:Repository<User> = AppDataSource.getRepository(User)

    const foundUser:User|null = await userRepo.findOneBy({ email: req.body.email })

    if(!foundUser) {
        return next()
    }
    
    throw new AppError("Email already exists", 409)
}

export const verifyPatchAuth = async (req:Request, res:Response, next:NextFunction) => {

}

export const verifyCategoryName = async (req:Request, res:Response, next:NextFunction) => {

}

export const verifyAdress = async (req:Request, res:Response, next:NextFunction) => {

}

export const verifySchedule = async (req:Request, res:Response, next:NextFunction) => {

}