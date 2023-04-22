import { type MutableRefObject, useEffect, useRef } from 'react'

export interface IntersectionObserverOptionsType {
    triggerRef: MutableRefObject<HTMLElement>
    wrapperRef: MutableRefObject<HTMLElement>
    callback?: () => void
}

export const useInfiniteScroll = ({
    triggerRef,
    wrapperRef,
    callback
}: IntersectionObserverOptionsType) => {
    const observer = useRef<IntersectionObserver | null>(null)
    useEffect(() => {
        if (callback) {
            const options = {
                root: wrapperRef.current,
                rootMargin: '0px',
                threshold: 1.0
            }

            observer.current = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback()
                }
            }, options)

            observer.current.observe(triggerRef.current)
        }
        return () => {
            if (observer.current && triggerRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.current.unobserve(triggerRef.current)
            }
        }
    }, [callback, wrapperRef, triggerRef])
}
