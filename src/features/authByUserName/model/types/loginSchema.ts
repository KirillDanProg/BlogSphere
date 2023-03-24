import { type StatusType } from 'app/types/global'

export interface LoginSchema {
    status?: StatusType
    error?: string
    email: string
    password: string
}
