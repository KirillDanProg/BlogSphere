import { type FC, memo } from 'react'
import { Button } from 'shared/ui'
import { useTheme } from 'shared/lib/hooks/useTheme'
import { Theme } from 'app/providers/ThemeProvider'
import SunIcon from 'shared/assets/icons/themeIcons/sun-solid.svg'
import MoonIcon from 'shared/assets/icons/themeIcons/moon-solid.svg'
import PalleteIcon from 'shared/assets/icons/themeIcons/palette-solid.svg'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo((props) => {
    const {
        theme,
        toggleTheme
    } = useTheme()

    const { className } = props

    const themeIcon = () => {
        switch (theme) {
            case Theme.LIGHT:
                return <SunIcon fill="#d0ac58" width="30px"/>
            case Theme.DARK:
                return <MoonIcon fill="#d8d8d8" width="30px" height="30px"/>
            case Theme.BLUE:
                return <PalleteIcon fill="#2517e2" width="30px"/>
            case Theme.CORAL:
                return <PalleteIcon fill="#e4695e" width="30px"/>
        }
    }

    return (
        <Button onClick={ toggleTheme } className={ className }>
            {
                themeIcon()
            }
        </Button>
    )
})
