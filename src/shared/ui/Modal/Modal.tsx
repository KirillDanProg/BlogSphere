import React, { type FC, type ReactNode, useEffect, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './Modal.module.scss'
import { Portal } from '../Portal/Portal'
import { useTheme } from 'shared/lib/hooks/useTheme'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
    overlayClose?: boolean
    lazy?: boolean
}

export const Modal: FC<ModalProps> = (props) => {
    const {
        children,
        className = '',
        isOpen,
        onClose,
        overlayClose = true,
        lazy = false
    } = props

    const { theme } = useTheme()
    const mods = {
        [s.opened]: isOpen
    }
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true)
        }
        return () => {
            setIsMounted(false)
        }
    }, [isOpen])

    if (lazy && !isMounted) {
        return null
    }

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }
    const closeHandler = () => {
        overlayClose && onClose?.()
    }
    return (
        <Portal>
            <div className={ classNames(s.Modal, mods, [className, theme]) }>
                <div className={ s.overlay } onClick={ closeHandler }>
                    <div className={ s.content } onClick={ onContentClick }>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
