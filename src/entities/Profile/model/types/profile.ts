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
    validationErrors: ValidateProfileErrors[] | null
}

export enum ValidateProfileErrors {
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_FIRSTNAME = 'INCORRECT_FIRSTNAME',
    INCORRECT_LASTNAME = 'INCORRECT_LASTNAME',
    INCORRECT_INSTAGRAM = 'INCORRECT_INSTAGRAM',
    SERVER_ERROR = 'SERVER_ERROR',
    NO_DATA = 'NO_DATA'
}
