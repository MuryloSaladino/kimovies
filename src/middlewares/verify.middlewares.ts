import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Address, Category, RealEstate, Schedule, User } from "../entities";
import { AppError } from "../errors";


export const verifyEmail = async (req:Request, res:Response, next:NextFunction) => {

    const userRepo:Repository<User> = AppDataSource.getRepository(User)

    const foundUser:User|null = await userRepo.findOneBy({ email: req.body.email })

    if(!foundUser) {
        return next()
    }
    
    throw new AppError("Email already exists", 409)
}

export const verifyUserId = async (req:Request, res:Response, next:NextFunction) => {

    const userRepo:Repository<User> = AppDataSource.getRepository(User)

    const foundUser:User|null = await userRepo.findOneBy({ id: Number(req.params.id) })

    if(foundUser) {
        return next()
    }
    
    throw new AppError("User not found", 404)
}

export const verifyPatchAuth = async (req:Request, res:Response, next:NextFunction) => {

    const userRepo:Repository<User> = AppDataSource.getRepository(User)

    const foundUser:User|null = await userRepo.findOneBy({ id: Number(req.params.id) })

    if(foundUser?.email != res.locals.user.email && !res.locals.admin) {
        throw new AppError("Insufficient permission", 403)
    }

    return next()
}

export const verifyCategoryName = async (req:Request, res:Response, next:NextFunction) => {

    const categoryRepo:Repository<Category> = AppDataSource.getRepository(Category)

    const foundCategory:Category|null = await categoryRepo.findOneBy({ name: req.body.name })

    if(foundCategory) {
        throw new AppError("Category already exists", 409)
    }

    return next()
}

export const verifyCategoryId = async (req:Request, res:Response, next:NextFunction) => {

    const categoryRepo:Repository<Category> = AppDataSource.getRepository(Category)

    const foundCategory:Category|null = await categoryRepo.findOneBy({ id: Number(req.params.id) })

    if(!foundCategory) {
        throw new AppError("Category not found", 404)
    }

    return next()
}

export const verifyCategoryIdForRealEstate = async (req:Request, res:Response, next:NextFunction) => {

    const categoryRepo:Repository<Category> = AppDataSource.getRepository(Category)

    const foundCategory:Category|null = await categoryRepo.findOneBy({ id: Number(req.body.categoryId) })

    if(!foundCategory) {
        throw new AppError("Category not found", 404)
    }

    return next()
}

export const verifyAdress = async (req:Request, res:Response, next:NextFunction) => {

    const addressRepo:Repository<Address> = AppDataSource.getRepository(Address)

    const foundAddress:Address|null = await addressRepo.findOneBy({ ...req.body.address })

    if(foundAddress) {
        throw new AppError("Address already exists", 409)
    }

    return next()
}

export const verifySchedule = async (req:Request, res:Response, next:NextFunction) => {

    const scheduleRepo:Repository<Schedule> = AppDataSource.getRepository(Schedule)
    const realEstateRepo:Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    const userRepo:Repository<User> = AppDataSource.getRepository(User)

    const user:User|null = await userRepo.findOneBy({ id: Number(res.locals.user.id) })
    const schedule:Schedule|null = await scheduleRepo.findOneBy({ date: req.body.date, hour: req.body.hour, realEstate: true })
    const realEstate:RealEstate|null = await realEstateRepo.findOneBy({ id: req.body.realEstateId })

    console.log(schedule)

    if(!schedule) {
        return next()
    }

    if(!realEstate) {
        throw new AppError("RealEstate not found", 404)
    }
    


    return next()
}