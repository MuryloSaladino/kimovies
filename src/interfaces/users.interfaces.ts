import { User } from "../entities";

export type TUserCreation = Pick<User, `name`|`email`|`password`|`admin` >

export type TUserUpdate = Omit<TUserCreation, 'admin'>