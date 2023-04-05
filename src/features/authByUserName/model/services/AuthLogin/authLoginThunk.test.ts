import { authLoginThunk } from 'features/authByUserName/model/services/AuthLogin/authLoginThunk'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

describe('authLoginThunk.test', () => {
    it('success authorization', async () => {
        const serverResponse = {
            email: 'test@mail.ru',
            token: 'testToken',
            userName: 'testUserName',
            _id: 123
        }

        const thunk = new TestAsyncThunk(authLoginThunk)
        thunk.api.post.mockReturnValue(Promise.resolve({ data: serverResponse }))
        const result = await thunk.callThunk({
            email: 'test@mail.ru',
            password: 'testPassword'
        })
        expect(thunk.api.post)
            .toHaveBeenCalled()
        expect(result.meta.requestStatus)
            .toEqual('fulfilled')
        expect(thunk.dispatch)
            .toHaveBeenCalledWith(userActions.setAuthUserData(serverResponse))
        expect(result.payload)
            .toEqual(serverResponse)
    })

    it('failed authorization', async () => {
        const thunk = new TestAsyncThunk(authLoginThunk)
        // eslint-disable-next-line prefer-promise-reject-errors
        thunk.api.post.mockReturnValue(Promise.reject())
        const result = await thunk.callThunk({
            email: 'test@mail.ru',
            password: 'testPassword'
        })
        expect(result.meta.requestStatus)
            .toEqual('rejected')
        expect(result.payload)
            .toEqual('something went wrong')
        expect(thunk.dispatch)
            .toHaveBeenCalledTimes(2)
    })
})
