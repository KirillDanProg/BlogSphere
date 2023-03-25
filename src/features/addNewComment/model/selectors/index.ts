import { type StateSchema } from 'app/providers/StoreProvider'

export const index = (state: StateSchema) => state.addNewComment?.text ?? ''
export const getCommentError = (state: StateSchema) => state.addNewComment?.error ?? null
