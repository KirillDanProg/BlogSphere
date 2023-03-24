import { fetchUserProfile, profileReducer, type ProfileSchema } from 'entities/Profile'

describe('profileSlice.test', () => {
    it('fetch profile data fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            data: null,
            status: 'idle'
        }
        const data = {
            instagram: 'instagram.com',
            lastName: 'Vychuzhanin',
            firstName: 'Kirill',
            country: 'Russia',
            age: 24
        }
        const action = {
            type: fetchUserProfile.fulfilled,
            payload: data
        }
        expect(profileReducer(state as ProfileSchema, action))
            .toEqual({
                status: 'succeeded',
                data,
                form: data
            })
    })
    it('fetch profile data rejected', () => {
        const state: DeepPartial<ProfileSchema> = {
            status: 'idle',
            error: null
        }
        const action = {
            type: fetchUserProfile.rejected,
            payload: 'error'
        }
        expect(profileReducer(state as ProfileSchema, action))
            .toEqual({
                status: 'failed',
                error: 'error'
            })
    })
})
