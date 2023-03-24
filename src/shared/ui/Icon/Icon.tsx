import React, { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './Icon.module.scss'

interface IconProps {
    className?: string
    Svg: React.FC<React.SVGProps<SVGSVGElement>>
}

export const Icon: FC<IconProps> = (props) => {
    const {
        className,
        Svg
    } = props

    return (
        <Svg className={ classNames(s.Icon, {}, [className]) }/>
    )
}
