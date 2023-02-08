import { type FC, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, type ThemeType } from '../lib/ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeType || Theme.LIGHT

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(defaultTheme)

  const defaultValue = useMemo(() => ({
    theme,
    setTheme
  }), [theme])

  return (
        <ThemeContext.Provider value={defaultValue}>
            {children}
        </ThemeContext.Provider>
  )
}
