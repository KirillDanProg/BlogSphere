import { type CSSProperties, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './Skeleton.module.scss'

interface SkeletonProps {
    className?: string
    width?: string | number
    height?: string | number
    borderRadius?: string
}

export const Skeleton: FC<SkeletonProps> = (props) => {
    const {
        width,
        height,
        className,
        borderRadius
    } = props
    const styles: CSSProperties = {
        width,
        height,
        borderRadius

    }
    return (
        <div
            style={ styles }
            className={ classNames(s.Skeleton, {}, [className]) }
        />

    )
}
