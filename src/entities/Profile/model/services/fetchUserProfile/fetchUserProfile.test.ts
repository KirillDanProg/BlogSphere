import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { fetchUserProfile } from 'entities/Profile'
import { type StateSchema } from 'app/providers/StoreProvider'

const data = {
    instagram: 'instagram.com',
    lastName: 'Vychuzhanin',
    firstName: 'Kirill',
    country: 'Russia',
    age: 24
}
describe('fetchUserProfile.test', () => {
    it('fetch user profile success', async () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: {
                    _id: 123
                }
            }
        }
        const thunk = new TestAsyncThunk(fetchUserProfile, state)
        thunk.api.get.mockReturnValue(Promise.resolve({ data }))
        const result = await thunk.callThunk('')
        expect(thunk.api.get)
            .toHaveBeenCalled()
        expect(result.meta.requestStatus)
            .toEqual('fulfilled')
        expect(result.payload)
            .toEqual(data)
    })
    it('return error when user not found', async () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: {
                    _id: undefined
                }
            }
        }
        const thunk = new TestAsyncThunk(fetchUserProfile, state)
        thunk.api.get.mockReturnValue(Promise.resolve({ data }))
        const result = await thunk.callThunk('')
        expect(result.meta.requestStatus)
            .toEqual('rejected')
        expect(result.payload)
            .toEqual('Что-то пошло не так')
    })
})
