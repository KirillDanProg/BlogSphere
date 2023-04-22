import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { getAuthError } from '../../selectors/getAuthError/getAuthError'

describe('getAuthError.test', () => {
    it('return auth error', () => {
        const state: DeepPartial<StateSchema> = {
            auth: {
                error: 'error',
                email: '',
                password: ''
            }
        }
        expect(getAuthError(state as StateSchema))
            .toEqual('error')
    })
})
