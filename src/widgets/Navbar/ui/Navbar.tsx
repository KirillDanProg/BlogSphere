import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './Navbar.module.scss'
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
    return (
        <div className={ classNames(s.Navbar) }>
            <div className={ classNames(s.links) }>
                <AppLink variant={ AppLinkVariant.OUTLINED } to="/">Главная </AppLink>
                <AppLink to="/about">Инфо</AppLink>
            </div>
        </div>
    )
}
