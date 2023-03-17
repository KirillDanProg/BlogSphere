import { createContext } from 'react'

export const Theme = {
    LIGHT: 'app_light_theme',
    DARK: 'app_dark_theme',
    BLUE: 'app_blue_theme',
    CORAL: 'app_coral_theme'
} as const

export type ThemeType = 'app_light_theme'
| 'app_dark_theme'
| 'app_blue_theme'
| 'app_coral_theme'

export interface IThemeContext {
    theme?: ThemeType
    setTheme?: (theme: ThemeType) => void
}

export const ThemeContext = createContext<IThemeContext>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
