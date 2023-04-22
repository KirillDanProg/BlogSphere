import { type StoryFn } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { type ReducersMapObject } from '@reduxjs/toolkit'
import { authReducer } from 'features/authByUserName'
import { articleDetailsReducer } from 'entities/Arcticle'
import { addNewCommentReducer } from 'features/addNewComment/model/slice/addNewCommentSlice'
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slice'
import { profileReducer } from 'features/editableProfileCard/model/slice/profileSlice'

const initialAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    auth: authReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addNewComment: addNewCommentReducer,
    articleDetailsPage: articleDetailsPageReducer
}

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
) => (Story: StoryFn) => {
    return (
        <StoreProvider
            initialState={ state }
            asyncReducers={ { ...initialAsyncReducers, ...asyncReducers } }
        >
            <Story/>
        </StoreProvider>
    )
}
