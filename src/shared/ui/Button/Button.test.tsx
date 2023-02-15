import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
    it('render test', () => {
        render(<Button>submit</Button>)
        expect(screen.queryByText('submit'))
            .toBeInTheDocument()
    })
})
