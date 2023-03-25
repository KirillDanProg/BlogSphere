import { type StateSchema } from 'app/providers/StoreProvider'
import { getUserId } from './userSelectors'

describe('getUserId.test', () => {
    it('return user id', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: {
                    _id: 123,
                    token: '',
                    email: '',
                    userName: ''
                }
            }
        }
        expect(getUserId(state as StateSchema))
            .toEqual(123)
    })
})
