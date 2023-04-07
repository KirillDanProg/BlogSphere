import { type StateSchema } from 'app/providers/StoreProvider'

export const getScrollPosition = (state: StateSchema) => state.scroll.scroll
export const getScrollPositionByPath = (state: StateSchema, path: string) => state.scroll.scroll[path]
