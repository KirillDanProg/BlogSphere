import { useContext, useEffect } from 'react'
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
    type ThemeType
} from 'app/providers/ThemeProvider/lib/ThemeContext'

interface IUseTheme {
    theme: ThemeType
    toggleTheme: () => void
}

export const useTheme = (): IUseTheme => {
    const {
        theme,
        setTheme
    } = useContext<any>(ThemeContext)

    const toggleTheme = () => {
        let newTheme: ThemeType
        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.LIGHT
                break
            case Theme.LIGHT:
                newTheme = Theme.BLUE
                break
            case Theme.BLUE:
                newTheme = Theme.DARK
                break
            default:
                newTheme = Theme.LIGHT
        }
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    useEffect(() => {
        document.body.className = theme
    }, [theme])

    return {
        theme,
        toggleTheme
    }
}
