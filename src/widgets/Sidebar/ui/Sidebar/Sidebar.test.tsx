import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from 'widgets/Sidebar'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation'

describe('Sidebar', () => {
    it('render test', () => {
        renderWithTranslation(
            <Sidebar/>
        )
        expect(screen.queryByTestId('sidebar'))
            .toBeInTheDocument()
    })

    it('testing sidebar toggle effect', () => {
        renderWithTranslation(
            <Sidebar/>
        )
        expect(screen.queryByTestId('sidebar'))
            .toHaveClass('collapsed')
        const toggleButton = screen.queryByTestId('sidebar-toggle')
        if (toggleButton != null) {
            fireEvent.click(toggleButton)
        }
        expect(screen.queryByTestId('sidebar'))
            .not
            .toHaveClass('collapsed')
    })
})
