import { type ReactNode } from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'app/providers/ThemeProvider'

export const renderWithTheme = (component: ReactNode) => {
    return render(
        <ThemeProvider>
            {component}
        </ThemeProvider>
    )
}
