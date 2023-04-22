import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ScrollSchema } from '../types/page'

const initialState: ScrollSchema = {
    scroll: {}
}
export const scrollSlice = createSlice({
    name: 'scroll/saveScrollPosition',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{ path: string, position: number }>) => {
            state.scroll[payload.path] = payload.position
        }
    }
})

export const { reducer: scrollReducer } = scrollSlice
export const { actions: scrollActions } = scrollSlice
