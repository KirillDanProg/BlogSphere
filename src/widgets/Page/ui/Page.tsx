import { type FC, type MutableRefObject, type UIEvent, useRef } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './Page.module.scss'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useLocation } from 'react-router-dom'
import { scrollActions } from 'widgets/Page/model/slice/saveScrollPositionSlice'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { useSelector } from 'react-redux'
import { getScrollPositionByPath } from 'widgets/Page'
import { type StateSchema } from 'app/providers/StoreProvider'
import { useThrottle } from 'shared/lib/hooks/useThrottle'

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
    const dispatch = useAppDispatch()
    const { pathname } = useLocation()
    const scrollPosition = useSelector((state: StateSchema) => getScrollPositionByPath(state, pathname))
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
    const wrapperRef = useRef() as MutableRefObject<HTMLElement>

    const onScrollHandler = (e: UIEvent<HTMLDivElement>) => {
        const payload = {
            path: pathname,
            position: e.currentTarget.scrollTop
        }
        dispatch(scrollActions.setScrollPosition(payload))
    }

    const throttledScroll = useThrottle(onScrollHandler, 500)

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd
    })

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition
    })
    return (
        <section
            ref={ wrapperRef }
            onScroll={ throttledScroll }
            className={ classNames(s.Page, {}, [className]) }>
            {children}
            <div
                className={ s.trigger }
                ref={ triggerRef }/>
        </section>
    )
}
