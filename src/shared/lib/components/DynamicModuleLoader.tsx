import { type FC, useEffect } from 'react'
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
}

export const DynamicModuleLoader: FC<Props> = (props) => {
    const {
        reducers,
        children,
        removeAfterUnmount = false
    } = props
    const store = useStore() as StoreWithReducerManager

    const dispatch = useDispatch()

    useEffect(() => {
        Object.entries(reducers)
            .forEach(([reducerKey, reducer]: ReducersListEntry) => {
                store.reducerManager.add(reducerKey, reducer)
                dispatch({ type: `@INIT_${reducerKey}` })
            })

        return () => {
            Object.entries(reducers)
                .forEach(([reducerKey, reducer]: ReducersListEntry) => {
                    if (removeAfterUnmount) {
                        store.reducerManager.remove(reducerKey)
                        dispatch({ type: `@DESTROY_${reducerKey}` })
                    }
                })
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            {children}
        </div>
    )
}
