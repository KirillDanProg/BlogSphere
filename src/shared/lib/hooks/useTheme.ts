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
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
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
