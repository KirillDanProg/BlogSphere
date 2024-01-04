export interface IUser {
    email: string
    token: string
    userName: string
    _id: number | null
    avatar?: string
}

export interface IServerResponseUser extends IUser {
    updatedAt: string
    createdAt: string
    __v: number
}

export interface UserSchema {
    authData: IUser | null
    isInit: boolean
}
