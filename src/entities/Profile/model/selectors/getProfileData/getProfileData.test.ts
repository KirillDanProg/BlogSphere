import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileData } from 'entities/Profile'

describe('getProfileData', () => {
    it('return profile data', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: {
                    instagram: 'instagram.com',
                    lastName: 'Vychuzhanin',
                    firstName: 'Kirill',
                    country: 'Russia',
                    age: 24
                }
            }
        }
        expect(getProfileData(state as StateSchema))
            .toEqual(state.profile?.data)
    })
})
