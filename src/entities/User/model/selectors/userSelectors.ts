import { type StateSchema } from 'app/providers/StoreProvider'

export const getUserId = (state: StateSchema) => state.user.authData?._id
export const getIsInit = (state: StateSchema) => state.user.isInit
export const getUserAuthData = (state: StateSchema) => state.user.authData
