import { type FC, type ReactNode } from 'react'
import { Provider } from 'react-redux'
import { setupStore } from '../config/store'
import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'

interface StoreProviderProps {
    children?: ReactNode
    initialState?: DeepPartial<StateSchema>
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const {
        children,
        initialState
    } = props
    const store = setupStore(initialState as StateSchema)
    return (
        <Provider store={ store }>
            {children}
        </Provider>
    )
}
