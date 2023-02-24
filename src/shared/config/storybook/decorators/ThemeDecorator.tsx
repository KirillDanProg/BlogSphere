import 'app/styles/index.scss'
import { type StoryFn } from '@storybook/react'
import { type ThemeType } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { ThemeProvider } from 'app/providers/ThemeProvider'

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: ThemeType) => (Story: StoryFn) => {
    return (
        <ThemeProvider initialTheme={ theme }>
            <div className={ `app ${theme}` }>
                <Story/>
            </div>
        </ThemeProvider>
    )
}
