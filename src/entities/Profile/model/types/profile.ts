import { type StatusType } from 'app/types/global'

export interface ProfileType {
    country: string
    age: number
    firstName: string
    instagram: string
    avatar: any
    lastName: string
}

export type ProfileTypePartial = Partial<ProfileType>

export interface ProfileSchema {
    form: ProfileTypePartial | null
    data: ProfileTypePartial | null
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
