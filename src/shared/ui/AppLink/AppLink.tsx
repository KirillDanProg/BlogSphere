import { type FC } from 'react'
import { type LinkProps, NavLink } from 'react-router-dom'
import s from './AppLink.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

export enum AppLinkVariant {
    PRIMARY = 'primary',
    DEFAULT = 'default',
    INVERTED = 'inverted',
    OUTLINED = 'outlined',
    WITHOUT_STYLE = 'without-styles'
}

interface AppLinkProps extends LinkProps {
    className?: string
    variant?: AppLinkVariant
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className = '',
        to,
        variant = AppLinkVariant.DEFAULT,
        children,
        ...otherProps
    } = props

    const toggleActiveLink = (navData: { isActive: boolean, isPending: boolean }) => {
        return `${classNames(s.AppLink, {}, [className, s[variant], navData.isActive ? s.active : ''])}`
    }

    return (
        <NavLink
            to={to}
            {...otherProps}
            className={toggleActiveLink}
        >
            {children}
        </NavLink>

    )
}
