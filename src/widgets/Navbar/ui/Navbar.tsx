import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
    return (
        <div className={ classNames(s.Navbar) }>
            <div className={ classNames(s.links) }>
            </div>
        </div>
    )
}
