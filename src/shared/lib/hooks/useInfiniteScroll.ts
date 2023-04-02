import { type MutableRefObject, useEffect } from 'react'

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
    useEffect(() => {
        let observer: IntersectionObserver
        if (callback) {
            const options = {
                root: wrapperRef.current,
                rootMargin: '0px',
                threshold: 1.0
            }

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback()
                }
            }, options)

            observer.observe(triggerRef.current)
        }
        return () => {
            if (observer) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(triggerRef.current)
            }
        }
    }, [triggerRef, wrapperRef, callback])
}
