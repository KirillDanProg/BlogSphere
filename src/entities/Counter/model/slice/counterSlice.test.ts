import { counterReducer, type CounterSchema } from 'entities/Counter'
import { counterActions } from 'entities/Counter/model/slice/counterSlice'

describe('counterSlice.test', () => {
    it('increment', () => {
        const state: CounterSchema = {
            value: 5
        }
        const updatedState = counterReducer(state, counterActions.increment())
        expect(updatedState)
            .toEqual({ value: 6 })
    })
    it('decrement', () => {
        const state: CounterSchema = {
            value: 5
        }
        const updatedState = counterReducer(state, counterActions.decrement())
        expect(updatedState)
            .toEqual({ value: 4 })
    })
    it('should work without state ', () => {
        const updatedState = counterReducer(undefined, counterActions.increment())
        expect(updatedState)
            .toEqual({ value: 1 })
    })
})
