import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileStatus } from 'entities/Profile'

describe('getProfileStatus', () => {
    it('return profile status', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                status: 'failed'
            }
        }
        expect(getProfileStatus(state as StateSchema))
            .toEqual('failed')
    })
})
