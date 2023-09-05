import { User } from "../entities";

export type TUserCreation = Pick<User, `name`|`email`|`password`|`admin` >

export type TUserUpdate = Partial<Omit<TUserCreation, 'admin'>>

export type TUserResponse = {
    password: undefined | string;
    id: number;
    name: string;
    email: string;
    admin: boolean;
    createdAt: string | undefined;
    updatedAt: string | undefined;
    deletedAt?: string | null | undefined;
}