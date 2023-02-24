import { fireEvent, screen } from '@testing-library/react'
import { customComponentRender } from 'shared/lib/tests/customRenderComponent'
import { Counter } from 'entities/Counter'

describe('Counter.test', () => {
    it('render counter component', () => {
        customComponentRender(
            <Counter/>,
            {
                initialState: { counter: { value: 0 } }
            }
        )

        expect(screen.queryByTestId('counter-title'))
            .toHaveTextContent('0')
    })
    it('component update after increment', () => {
        customComponentRender(
            <Counter/>,
            {
                initialState: { counter: { value: 0 } }
            }
        )

        const buttonIncrement = screen.queryByTestId('counter-inc')
        if (buttonIncrement != null) {
            fireEvent.click(buttonIncrement)
        }
        expect(screen.queryByTestId('counter-title'))
            .toHaveTextContent('1')
    })
    it('component update after decrement', () => {
        customComponentRender(
            <Counter/>,
            {
                initialState: { counter: { value: 0 } }
            }
        )
        const buttonDecrement = screen.queryByTestId('counter-dec')
        if (buttonDecrement != null) {
            fireEvent.click(buttonDecrement)
        }
        expect(screen.queryByTestId('counter-title'))
            .toHaveTextContent('-1')
    })
})
