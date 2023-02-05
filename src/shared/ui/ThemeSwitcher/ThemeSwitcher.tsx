import {FC} from 'react';
import {Button} from "shared/ui/Button/Button";
import SunIcon from "shared/assets/icons/sun-solid.svg"
import MoonIcon from "shared/assets/icons/moon-solid.svg"
import {useTheme} from "app/providers/ThemeProvider";
import {Theme} from "app/providers/ThemeProvider/lib/ThemeContext";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const {theme, toggleTheme} = useTheme()

    return (
        <Button onClick={toggleTheme}>
            {
                theme === Theme.LIGHT ? <SunIcon fill="#fffb0d" width="30px"/> : <MoonIcon fill="#4d48bc" width="30px"/>
            }
        </Button>
    );
};