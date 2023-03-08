import { type StateSchema } from 'app/providers/StoreProvider'

export const getAuthStatus = (state: StateSchema) => state.auth?.status || 'idle'
