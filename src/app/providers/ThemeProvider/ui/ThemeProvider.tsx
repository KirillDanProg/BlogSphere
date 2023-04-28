import { type ReactNode, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, type ThemeType } from '../lib/ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeType || Theme.LIGHT

interface ThemeProviderProps {
    initialTheme?: ThemeType
    children: ReactNode
}

export const ThemeProvider = (props: ThemeProviderProps) => {
    const {
        initialTheme,
        children
    } = props

    const currentTheme = initialTheme ?? defaultTheme

    const [theme, setTheme] = useState<ThemeType>(currentTheme)
    const defaultValue = useMemo(() => ({
        theme,
        setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={ defaultValue }>
            {children}
        </ThemeContext.Provider>
    )
}
