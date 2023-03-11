import { type FC, type ReactNode } from 'react'
import { Provider } from 'react-redux'
import { setupStore } from '../config/store'
import { type ReducersMapObject } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { useNavigate } from 'react-router-dom'

interface StoreProviderProps {
    children?: ReactNode
    initialState?: DeepPartial<StateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const {
        children,
        initialState,
        asyncReducers
    } = props

    const navigate = useNavigate()
    const store = setupStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
        navigate
    )

    return (
        <Provider store={ store }>
            {children}
        </Provider>
    )
}
