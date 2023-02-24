import { configureStore } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { counterReducer } from 'entities/Counter/model/slice/counterSlice'

export const setupStore = (initialState?: StateSchema) => configureStore<StateSchema>({
    reducer: {
        counter: counterReducer
    },
    devTools: __IS_DEV__,
    preloadedState: initialState
})
