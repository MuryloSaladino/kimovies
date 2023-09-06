export type TUserResponse = {
    password: undefined | string;
    id: number;
    name: string | undefined;
    email: string | undefined;
    admin: boolean | undefined;
    createdAt: string | undefined | null;
    updatedAt: string | undefined | null;
    deletedAt?: string | null | undefined;
}

export type TUserCreation = {
    name: string;
    email: string;
    admin: boolean;
    password: string;
}

export type TUserUpdate = Partial<TUserCreation>