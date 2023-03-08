import { type UserSchema } from 'entities/User'
import { type LoginSchema } from 'features/AuthByUserName/model/types/loginSchema'
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import {
    type AnyAction,
    type CombinedState,
    type Reducer,
    type ReducersMapObject
} from '@reduxjs/toolkit'

export interface StateSchema {
    user: UserSchema
    auth?: LoginSchema
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
