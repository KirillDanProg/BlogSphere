import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue'

describe('getCounter selector', () => {
    it('return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 5 }
        }

        expect(getCounterValue(state as StateSchema))
            .toEqual(5)
    })
})
