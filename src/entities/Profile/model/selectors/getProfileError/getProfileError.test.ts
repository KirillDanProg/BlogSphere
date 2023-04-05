import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileError } from 'entities/Profile'

describe('getProfileError', () => {
    it('return profile error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'error'
            }
        }
        expect(getProfileError(state as StateSchema))
            .toEqual('error')
    })
    it('return null if there is no error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: undefined
            }
        }
        expect(getProfileError(state as StateSchema))
            .toEqual(null)
    })
})
