import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './Wrapper.module.scss'

interface WrapperProps {
    className?: string
}

export const Wrapper: FC<WrapperProps> = (props) => {
    const {
        children
    } = props
    return (
        <div className={ classNames(s.Wrapper) }>
            {children}
        </div>
    )
}
