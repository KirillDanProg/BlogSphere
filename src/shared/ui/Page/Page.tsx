import { type FC, type MutableRefObject, useRef } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './Page.module.scss'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll'

interface PageProps {
    className?: string
    onScrollEnd?: () => void
}

export const Page: FC<PageProps> = (props) => {
    const {
        className,
        children,
        onScrollEnd
    } = props

    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
    const wrapperRef = useRef() as MutableRefObject<HTMLElement>
    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd
    })
    return (
        <section ref={ wrapperRef } className={ classNames(s.Page, {}, [className]) }>
            {children}
            <div ref={ triggerRef }/>
        </section>
    )
}
