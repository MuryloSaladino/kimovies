import { User } from "../entities";

export type TUserCreation = Pick<User, `name`|`email`|`password`|`admin` >

export type TUserUpdate = Omit<TUserCreation, 'admin'>

export type TUserResponse = {
    password: undefined;
    id: number;
    name: string;
    email: string;
    admin: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt?: string | null | undefined;
}