import { Repository } from "typeorm";
import { TUserCreation, TUserResponse, TUserUpdate } from "../interfaces";
import { User } from "../entities";
import { AppDataSource } from "../data-source";


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

}

export const deleteUserService = async (id: number) => {
    
}