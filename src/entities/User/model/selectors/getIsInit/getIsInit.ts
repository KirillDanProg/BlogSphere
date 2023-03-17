import { type StateSchema } from 'app/providers/StoreProvider'

export const getIsInit = (state: StateSchema) => state.user.isInit
