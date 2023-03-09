import { type StatusType } from 'app/types/global'

export interface ProfileType {
    firstName: string
    lastName: string
    dateOfBirth: string
    country: string
    contacts: ContactType
}

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
