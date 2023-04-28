import { type FC, type ReactNode, useEffect } from 'react'
import {
    type StateSchemaKey,
    type StoreWithReducerManager
} from 'app/providers/StoreProvider/config/StateSchema'
import { type Reducer } from '@reduxjs/toolkit'
import { useDispatch, useStore } from 'react-redux'

export type ReducersListType = {
    [reducerKey in StateSchemaKey]?: Reducer
}
export type ReducersListEntry = [reducerKey: StateSchemaKey, reducer: Reducer]

interface Props {
    reducers: ReducersListType
    removeAfterUnmount?: boolean
    children: ReactNode
}

export const DynamicModuleLoader: FC<Props> = (props) => {
    const {
        reducers,
        children,
        removeAfterUnmount = true
    } = props
    const store = useStore() as StoreWithReducerManager

    const dispatch = useDispatch()

    useEffect(() => {
        const mountedReducers = store.reducerManager.getReducerMap()
        Object.entries(reducers)
            .forEach(([reducerKey, reducer]) => {
                const mounted = mountedReducers[reducerKey as StateSchemaKey]
                if (!mounted) {
                    store.reducerManager.add(reducerKey as StateSchemaKey, reducer)
                    dispatch({ type: `@INIT_${reducerKey}` })
                }
            })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers)
                    .forEach(([reducerKey, reducer]) => {
                        store.reducerManager.remove(reducerKey as StateSchemaKey)
                        dispatch({ type: `@DESTROY_${reducerKey}` })
                    })
            }
        }
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {children}
        </>
    )
}
