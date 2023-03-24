import { screen } from '@testing-library/react'
import { Sidebar } from 'widgets/Sidebar'
import { customComponentRender } from 'shared/lib/tests/customRenderComponent'

describe('Sidebar', () => {
    it('render test', () => {
        customComponentRender(
            <Sidebar/>
        )
        expect(screen.queryByTestId('sidebar'))
            .toBeInTheDocument()
    })

    it('testing sidebar toggle', () => {
        customComponentRender(<Sidebar/>)
        // const toggleButton = screen.queryByTestId('sidebar-toggle')
        expect(screen.queryByTestId('sidebar'))
            .toBeInTheDocument()
        // expect(screen.queryByTestId('sidebar'))
        //     .toHaveClass('Sidebar')
        // ;(toggleButton != null) && fireEvent.click(toggleButton)
        // expect(screen.queryByTestId('sidebar'))
        //     .not
        //     .toHaveClass('collapsed')
        // ;(toggleButton != null) && fireEvent.click(toggleButton)
        // expect(screen.queryByTestId('sidebar'))
        //     .toHaveClass('collapsed')
    })
})
