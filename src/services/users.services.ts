import { Repository } from "typeorm";
import { TUserCreation, TUserResponse, TUserUpdate } from "../interfaces";
import { User } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";


export const createUserService = async (payload:TUserCreation) => {

    const userRepo:Repository<User> = AppDataSource.getRepository(User)

    const user:User = await userRepo.create(payload)

    await userRepo.save(user)

    return {...user, password: undefined}
}

export const readUsersService = async () => {

    const userRepo:Repository<User> = AppDataSource.getRepository(User)

    const users:TUserResponse[] = (await userRepo.find()).map((user) => {
        return {...user, password: undefined}
    })

    return users
}

export const updateUserService = async (id:number, payload:TUserUpdate) => {

    const userRepo:Repository<User> = AppDataSource.getRepository(User)

    const user:User|null = await userRepo.findOneBy({ id: id })

    if(!user) {
        throw new AppError("User not found", 404)
    }

    const updatedUser:User = userRepo.create({ ...user, ...payload })

    await userRepo.save(updatedUser)

    return {...updatedUser, password: undefined}
}

export const deleteUserService = async (id: number) => {
    
    const userRepo:Repository<User> = AppDataSource.getRepository(User)

    const user:User|null = await userRepo.findOneBy({ id: id })

    if(!user || user.deletedAt) {
        throw new AppError("User not found", 404)
    }

    await userRepo.softDelete(user.id)
}