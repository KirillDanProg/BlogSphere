import { type StateSchema } from 'app/providers/StoreProvider'
import { type AsyncThunkAction } from '@reduxjs/toolkit'

type ActionCreatorType<ReturnValue, Arg, RejectValue> =
    (arg: Arg) => AsyncThunkAction<ReturnValue, Arg, { rejectValue: RejectValue }>

export class TestAsyncThunk<ReturnValue, Arg, RejectValue> {
    dispatch: jest.MockedFn<any>
    getState: () => StateSchema
    actionCreator: ActionCreatorType<ReturnValue, Arg, RejectValue>

    constructor (actionCreator: ActionCreatorType<ReturnValue, Arg, RejectValue>) {
        this.actionCreator = actionCreator
        this.dispatch = jest.fn()
        this.getState = jest.fn()
    }

    async callThunk (arg: Arg) {
        const action = this.actionCreator(arg)
        const result = await action(this.dispatch, this.getState, undefined)
        return result
    }
}
