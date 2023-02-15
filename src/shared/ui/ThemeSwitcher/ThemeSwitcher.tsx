import { type FC } from 'react'
import { Button } from 'shared/ui'
import { useTheme } from 'shared/lib/hooks/useTheme'
import { Theme } from 'app/providers/ThemeProvider'
import SunIcon from 'shared/assets/icons/themeIcons/sun-solid.svg'
import MoonIcon from 'shared/assets/icons/themeIcons/moon-solid.svg'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = () => {
    const {
        theme,
        toggleTheme
    } = useTheme()

    return (
        <Button onClick={ toggleTheme }>
            {
                theme === Theme.LIGHT
                    // eslint-disable-next-line i18next/no-literal-string
                    ? <SunIcon fill="#fffb0d" width="30px"/>
                    // eslint-disable-next-line i18next/no-literal-string
                    : <MoonIcon fill="#4d48bc" width="30px"/>
            }
        </Button>
    )
}
