import { type StatusType } from 'app/types/global'

export interface ProfileType {
    country: string
    age: number
    firstName: string
    instagram: string
    avatar: string
    lastName: string
}

export type ProfileUpdateType = Partial<ProfileType>

export interface ProfileSchema {
    data: ProfileType | null
    error: string | null
    status: StatusType
    readonly: boolean
}

export interface ContactType {
    instagram: string
    vk: string
    telegram: string
    phone: number
    email: string
}
