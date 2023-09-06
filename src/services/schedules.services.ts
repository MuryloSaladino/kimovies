import { Repository } from "typeorm";
import { TScheduleCreation } from "../interfaces";
import { RealEstate, Schedule, User } from "../entities";
import { AppDataSource } from "../data-source";


export const createScheduleService = async (payload:TScheduleCreation, userId:number) => {

    const userRepo:Repository<User> = AppDataSource.getRepository(User)
    const realEstateRepo:Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    const scheduleRepo:Repository<Schedule> = AppDataSource.getRepository(Schedule)

    const user:User|null = await userRepo.findOneBy({ id: userId })
    const realEstate:RealEstate|null = await realEstateRepo.findOneBy({ id: payload.realEstateId })
    const schedule:Schedule = await scheduleRepo.create({ ...payload, user: user!, realEstate: realEstate! })

    await scheduleRepo.save(schedule)
}

export const readSchedulesFromRealEstateService = async (realEstateId:number) => {

    const realEstateRepo:Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    const scheduleRepo:Repository<Schedule> = AppDataSource.getRepository(Schedule)

    const realEstate:RealEstate|null = await realEstateRepo.findOneBy({ id: realEstateId })
    const schedules:Schedule[] = await scheduleRepo.find({ relations: ['user'], where: { realEstate: { id: realEstate!.id } } })

    return { ...realEstate, schedules: [schedules] }
}