import { type DetailedHTMLProps, type FC, type HTMLAttributes, type ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './Flex.module.scss'

type JustifyType = 'center' | 'between' | 'start' | 'end'
type AlignType = 'start' | 'center' | 'end'
type DirectionType = 'row' | 'column'
type GapType = '4' | '8' | '16' | '32'
type WrapType = 'wrap' | 'nowrap'

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export interface FlexProps extends DivProps {
    className?: string
    children: ReactNode
    justify?: JustifyType
    align?: AlignType
    direction: DirectionType
    gap?: GapType
    wrap?: WrapType
}

export const Flex: FC<FlexProps> = (props) => {
    const {
        className,
        children,
        align = 'start',
        direction = 'row',
        justify = 'start',
        wrap,
        gap
    } = props

    const justifyClasses: Record<JustifyType, string> = {
        center: s.justifyCenter,
        end: s.justifyEnd,
        start: s.justifyStart,
        between: s.justifyBetween
    }
    const alignClasses: Record<AlignType, string> = {
        center: s.alignCenter,
        end: s.alignEnd,
        start: s.alignStart
    }
    const directionClasses: Record<DirectionType, string> = {
        row: s.directionRow,
        column: s.directionColumn
    }
    const gapClasses: Record<GapType, string> = {
        4: s.gap4,
        8: s.gap8,
        16: s.gap16,
        32: s.gap32
    }
    const wrapClasses: Record<WrapType, string> = {
        wrap: s.wrap,
        nowrap: s.nowrap
    }
    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
        wrap && wrapClasses[wrap]
    ]

    return (
        <div className={ classNames(s.Flex, {}, classes) }>
            {children}
        </div>
    )
}
