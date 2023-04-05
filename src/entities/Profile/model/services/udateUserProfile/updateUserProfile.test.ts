import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { updateUserProfile } from 'entities/Profile'
import { type StateSchema } from 'app/providers/StoreProvider'
import { ValidateProfileErrors } from 'entities/Profile/model/types/profile'

const data = {
    instagram: 'instagram.com',
    lastName: 'Vychuzhanin',
    firstName: 'Kirill',
    country: 'Russia',
    age: 24
}
describe('updateUserProfile.test', () => {
    it('update user profile success', async () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: {
                    _id: 123
                }
            },
            profile: {
                form: data,
                validationErrors: []
            }
        }
        const thunk = new TestAsyncThunk(updateUserProfile, state)
        thunk.api.put.mockReturnValue(Promise.resolve({ data }))
        const result = await thunk.callThunk('')
        expect(thunk.api.put)
            .toHaveBeenCalled()
        expect(result.meta.requestStatus)
            .toEqual('fulfilled')
        expect(result.payload)
            .toEqual(data)
    })
    it('update user profile failed with validation errors', async () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: {
                    _id: 123
                }
            },
            profile: {
                form: {
                    instagram: '1',
                    lastName: 'n',
                    firstName: 'l',
                    country: 'a',
                    age: -24
                }
            }
        }
        const thunk = new TestAsyncThunk(updateUserProfile, state)
        const result = await thunk.callThunk('')

        expect(result.meta.requestStatus)
            .toEqual('rejected')
        expect(result.payload)
            .toEqual([
                ValidateProfileErrors.INCORRECT_COUNTRY,
                ValidateProfileErrors.INCORRECT_AGE,
                ValidateProfileErrors.INCORRECT_LASTNAME,
                ValidateProfileErrors.INCORRECT_FIRSTNAME,
                ValidateProfileErrors.INCORRECT_INSTAGRAM
            ])
    })

    it('return error when data is null', async () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: {
                    _id: 123
                }
            },
            profile: {
                form: null
            }
        }
        const thunk = new TestAsyncThunk(updateUserProfile, state)
        const result = await thunk.callThunk('')

        expect(result.meta.requestStatus)
            .toEqual('rejected')
        expect(result.payload)
            .toEqual([
                ValidateProfileErrors.NO_DATA
            ])
    })
})
