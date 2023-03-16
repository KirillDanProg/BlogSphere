import { authReducer, type LoginSchema } from 'features/AuthByUserName'
import { authLoginThunk } from 'features/AuthByUserName/model/services/AuthLogin/authLoginThunk'

describe('authSlice.test', () => {
    test('authLoginThunk pending', () => {
        const state: DeepPartial<LoginSchema> = {
            status: 'idle'
        }
        expect(authReducer(
            state as LoginSchema,
            authLoginThunk.pending
        ))
            .toEqual({ status: 'loading' })
    })
    test('authLoginThunk fulfilled', () => {
        const state: DeepPartial<LoginSchema> = {
            status: 'idle'
        }
        expect(authReducer(
            state as LoginSchema,
            authLoginThunk.fulfilled
        ))
            .toEqual({ status: 'succeeded' })
    })
    test('authLoginThunk rejected', () => {
        const state: DeepPartial<LoginSchema> = {
            status: 'idle'
        }
        const action = {
            type: authLoginThunk.rejected,
            payload: 'error'
        }
        expect(authReducer(
            state as LoginSchema,
            action
        ))
            .toEqual({
                status: 'failed',
                error: 'error'
            })
    })
})
