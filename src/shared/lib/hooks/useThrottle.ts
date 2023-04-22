import { useCallback, useRef } from 'react'

export const useThrottle = (callback: (...args: any[]) => void, delay: number) => {
    const throttleRef = useRef(false)
    return useCallback((...args: any[]) => {
        if (!throttleRef.current) {
            throttleRef.current = true
            // eslint-disable-next-line n/no-callback-literal
            callback(...args)
            setTimeout(() => {
                throttleRef.current = false
            }, delay)
        }
    }, [callback, delay])
}
