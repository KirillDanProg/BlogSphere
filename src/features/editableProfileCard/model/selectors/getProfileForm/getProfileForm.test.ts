import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileForm } from './getProfileForm'

describe('getProfileForm', () => {
    it('return profile form', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: {
                    instagram: 'instagram.com',
                    lastName: 'Vychuzhanin',
                    firstName: 'Kirill',
                    country: 'Russia',
                    age: 24
                }
            }
        }
        expect(getProfileForm(state as StateSchema))
            .toEqual(state.profile?.form)
    })

    it('return null if there is no form data', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: undefined
            }
        }
        expect(getProfileForm(state as StateSchema))
            .toEqual(null)
    })
})
