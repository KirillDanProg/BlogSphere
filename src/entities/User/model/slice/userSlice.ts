import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type IUser, type UserSchema } from '../types/user'

const initialState: UserSchema = {
    authData: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthUserData: (state, action: PayloadAction<IUser>) => {
            state.authData = action.payload
        },
        deleteUserAuthData: (state) => {
            state.authData = null
        }
    }
})

export const { reducer: userReducer } = userSlice
export const { actions: userActions } = userSlice

export const initAuthUserDataThunk = createAsyncThunk(
    'auth/dataInit',
    (_, { dispatch }) => {
        const authUserData = localStorage.getItem('userData')
        if (authUserData) {
            dispatch(userActions.setAuthUserData(JSON.parse(authUserData)))
        }
    }
)

export const deleteAuthUserDataThunk = createAsyncThunk(
    'auth/dataDelete',
    (_, { dispatch }) => {
        localStorage.removeItem('userData')
        dispatch(userActions.deleteUserAuthData())
    }
)
