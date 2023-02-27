import { type UserSchema } from 'entities/User'
import { type LoginSchema } from 'features/AuthByUserName/model/types/loginSchema'

export interface StateSchema {
    user: UserSchema
    auth: LoginSchema
}
