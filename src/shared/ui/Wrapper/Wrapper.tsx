import { type FC, type ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './Wrapper.module.scss'

interface WrapperProps {
    className?: string
    children: ReactNode
}

export const Wrapper: FC<WrapperProps> = (props) => {
    const {
        children,
        className
    } = props
    return (
        <div className={ classNames(s.Wrapper, {}, [className]) }>
            {children}
        </div>
    )
}
