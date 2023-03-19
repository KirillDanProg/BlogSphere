import { type UserSchema } from 'entities/User'
import { type LoginSchema } from 'features/AuthByUserName/model/types/loginSchema'
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import {
    type AnyAction,
    type CombinedState,
    type Reducer,
    type ReducersMapObject
} from '@reduxjs/toolkit'
import { type ProfileSchema } from 'entities/Profile'
import { type AxiosInstance } from 'axios'
import { type To } from '@remix-run/router'
import { type NavigateOptions } from 'react-router/dist/lib/context'
import { type ArticleSchema } from 'entities/Arcticle/model/types/articleSchema'

export interface StateSchema {
    user: UserSchema

    // async reducers
    auth?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleSchema

}

export interface IReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}

export interface StoreWithReducerManager extends ToolkitStore<StateSchema> {
    reducerManager: IReducerManager
}

export type StateSchemaKey = keyof StateSchema

export interface ThunkExtraArg {
    api: AxiosInstance
    navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}
