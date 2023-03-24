import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { getAuthStatus } from 'features/authByUserName/model/selectors/getAuthStatus/getAuthStatus'

describe('getAuthStatus.test', () => {
    it('return auth status', () => {
        const state: DeepPartial<StateSchema> = {
            auth: {
                status: 'idle',
                email: '',
                password: ''
            }
        }
        expect(getAuthStatus(state as StateSchema))
            .toEqual('idle')
    })
})
