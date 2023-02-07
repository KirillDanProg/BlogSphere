import { type FC } from 'react'
import { Button } from 'shared/ui'
import { useTheme } from 'shared/lib/hooks/useTheme'
import { Theme } from 'app/providers/ThemeProvider'
import SunIcon from 'shared/assets/icons/themeIcons/sun-solid.svg'
import MoonIcon from 'shared/assets/icons/themeIcons/moon-solid.svg'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { theme, toggleTheme } = useTheme()

  return (
        <Button onClick={toggleTheme}>
            {
                theme === Theme.LIGHT ? <SunIcon fill="#fffb0d" width="30px"/> : <MoonIcon fill="#4d48bc" width="30px"/>
            }
        </Button>
  )
}
