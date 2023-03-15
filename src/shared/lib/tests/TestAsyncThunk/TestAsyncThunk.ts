import { type StateSchema } from 'app/providers/StoreProvider'
import { type AsyncThunkAction } from '@reduxjs/toolkit'
import axios, { type AxiosStatic } from 'axios'

type ActionCreatorType<ReturnValue, Arg, RejectValue> =
    (arg: Arg) => AsyncThunkAction<ReturnValue, Arg, { rejectValue: RejectValue }>

jest.mock('axios')

const mockedAxios = jest.mocked(axios, { shallow: false })

export class TestAsyncThunk<ReturnValue, Arg, RejectValue> {
    dispatch: jest.MockedFn<any>
    getState: () => StateSchema
    actionCreator: ActionCreatorType<ReturnValue, Arg, RejectValue>
    api: jest.MockedFunctionDeep<AxiosStatic>
    navigate: jest.MockedFn<any>

    constructor (actionCreator:
    ActionCreatorType<ReturnValue, Arg, RejectValue>,
    state?: DeepPartial<StateSchema>
    ) {
        this.actionCreator = actionCreator
        this.dispatch = jest.fn()
        this.getState = jest.fn(() => state as StateSchema)
        this.api = mockedAxios
        this.navigate = jest.fn()
    }

    async callThunk (arg: Arg) {
        const action = this.actionCreator(arg)
        const result = await action(
            this.dispatch,
            this.getState,
            {
                api: this.api,
                navigate: this.navigate
            }
        )
        return result
    }
}
