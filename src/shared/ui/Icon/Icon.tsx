import React, { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './Icon.module.scss'

interface IconProps {
    className?: string
    Svg: React.FC<React.SVGProps<SVGSVGElement>>
    inverted?: boolean
}

export const Icon: FC<IconProps> = (props) => {
    const {
        className,
        Svg,
        inverted
    } = props

    return (
        <Svg className={ classNames(inverted ? s.inverted : s.Icon, {}, [className]) }/>
    )
}
