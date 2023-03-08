import axios from 'axios'
import { authLoginThunk } from 'features/AuthByUserName/model/services/AuthLogin/authLoginThunk'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

jest.mock('axios')
const mockedAxios = jest.mocked(axios, { shallow: false })
describe('authLoginThunk.test', () => {
    // let dispatch: Dispatch
    // let getState: () => StateSchema
    //
    // beforeEach(() => {
    //     dispatch = jest.fn()
    //     getState = jest.fn()
    // })
    //
    // it('success authorization', async () => {
    //     const serverResponse = {
    //         email: 'test@mail.ru',
    //         token: 'testToken',
    //         userName: 'testUserName',
    //         _id: 123
    //     }
    //
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: serverResponse }))
    //     const action = authLoginThunk({
    //         email: 'test@mail.ru',
    //         password: 'testPassword'
    //     })
    //     const result = await action(dispatch, getState, undefined)
    //     expect(mockedAxios.post)
    //         .toHaveBeenCalled()
    //     expect(result.meta.requestStatus)
    //         .toEqual('fulfilled')
    //     expect(dispatch)
    //         .toHaveBeenCalledWith(userActions.setAuthUserData(serverResponse))
    //     expect(result.payload)
    //         .toEqual(serverResponse)
    // })
    //
    // it('failed authorization', async () => {
    //     // eslint-disable-next-line prefer-promise-reject-errors
    //     mockedAxios.post.mockReturnValue(Promise.reject({ response: { data: { message: 'error' } } }))
    //     const action = authLoginThunk({
    //         email: 'testqwerqw',
    //         password: 'qw'
    //     })
    //     const result = await action(dispatch, getState, undefined)
    //     expect(result.meta.requestStatus)
    //         .toEqual('rejected')
    //     expect(result.payload)
    //         .toEqual('error')
    //     expect(dispatch)
    //         .toHaveBeenCalledTimes(2)
    // })

    it('success authorization', async () => {
        const serverResponse = {
            email: 'test@mail.ru',
            token: 'testToken',
            userName: 'testUserName',
            _id: 123
        }

        mockedAxios.post.mockReturnValue(Promise.resolve({ data: serverResponse }))
        const thunk = new TestAsyncThunk(authLoginThunk)
        const result = await thunk.callThunk({
            email: 'test@mail.ru',
            password: 'testPassword'
        })
        expect(mockedAxios.post)
            .toHaveBeenCalled()
        expect(result.meta.requestStatus)
            .toEqual('fulfilled')
        expect(thunk.dispatch)
            .toHaveBeenCalledWith(userActions.setAuthUserData(serverResponse))
        expect(result.payload)
            .toEqual(serverResponse)
    })

    it('failed authorization', async () => {
        // eslint-disable-next-line prefer-promise-reject-errors
        mockedAxios.post.mockReturnValue(Promise.reject({ response: { data: { message: 'error' } } }))
        const thunk = new TestAsyncThunk(authLoginThunk)
        const result = await thunk.callThunk({
            email: 'test@mail.ru',
            password: 'testPassword'
        })
        expect(result.meta.requestStatus)
            .toEqual('rejected')
        expect(result.payload)
            .toEqual('error')
        expect(thunk.dispatch)
            .toHaveBeenCalledTimes(2)
    })
})
