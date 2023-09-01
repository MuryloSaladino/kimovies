import { Repository } from "typeorm";
import { TLogin } from "../interfaces";
import { User } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";
import { compareSync } from "bcryptjs";
import { sign } from "jsonwebtoken";

export const loginService = async (payload:TLogin) => {

    const userRepo:Repository<User> = AppDataSource.getRepository(User)

    const user:User|null = await userRepo.findOneBy({ email: payload.email })

    if(!user || user.deletedAt) {
        throw new AppError("Invalid credentials", 401)
    }

    console.log(user.deletedAt)

    const compare:boolean = compareSync(payload.password, user.password)

    if(!compare) {
        throw new AppError("Invalid credentials", 401)
    }
    
    const token:string = sign(
        {
            email: user.email, 
            admin: user.admin
        },
        String(process.env.SECRET_KEY),
        {
            expiresIn: String(process.env.EXPIRES_IN),
            subject: String(user.id)
        }
    )

    return { token: token }
}