import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileReadonly } from 'entities/Profile'

describe('getProfileReadonly.test', () => {
    it('return profile readonly flag', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true
            }
        }
        expect(getProfileReadonly(state as StateSchema))
            .toEqual(true)
    })
})
