import {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import s from "./Navbar.module.scss"
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui";

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {

    return (
        <div className={classNames(s.Navbar)}>
            <div className={classNames(s.links)}>
                <AppLink theme={AppLinkTheme.OUTLINED} to="/">Главная </AppLink>
                <AppLink to="/about">Инфо</AppLink>
            </div>
            <ThemeSwitcher/>
        </div>
    );
};