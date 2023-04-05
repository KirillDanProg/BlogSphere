import { type UserSchema } from 'entities/User'
import { type LoginSchema } from 'features/authByUserName/model/types/loginSchema'
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import {
    type AnyAction,
    type CombinedState,
    type Reducer,
    type ReducersMapObject
} from '@reduxjs/toolkit'
import { type ProfileSchema } from 'entities/Profile'
import { type AxiosInstance } from 'axios'
import { type ArticleSchema } from 'entities/Arcticle/model/types/articleSchema'
import { type ArticleDetailsCommentSchema } from 'pages/ArticleDetailsPage'
import { type AddNewCommentSchema } from 'features/addNewComment'
import { type ArticlesPageSchema } from 'pages/ArticlesPage'

export interface StateSchema {
    user: UserSchema

    // async reducers
    auth?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleSchema
    articleDetailsComments?: ArticleDetailsCommentSchema
    addNewComment?: AddNewCommentSchema
    articlesPage?: ArticlesPageSchema
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
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}
