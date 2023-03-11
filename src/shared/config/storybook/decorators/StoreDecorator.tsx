import { type StoryFn } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { type ReducersMapObject } from '@reduxjs/toolkit'
import { authReducer } from 'features/AuthByUserName'

const initialAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    auth: authReducer
}

export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>) => (Story: StoryFn) => {
    return (
        <StoreProvider
            initialState={ state }
            asyncReducers={ { ...initialAsyncReducers, ...asyncReducers } }
        >
            <Story/>
        </StoreProvider>
    )
}
