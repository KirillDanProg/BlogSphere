import React, { type FC, type ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './Modal.module.scss'
import { Portal } from 'shared/ui/Portal/Portal'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
}

export const Modal: FC<ModalProps> = (props) => {
    const {
        children,
        className = '',
        isOpen,
        onClose
    } = props

    const mods = {
        [s.opened]: isOpen
    }

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }
    const closeHandler = () => {
        onClose?.()
    }
    return (
        <Portal>
            <div className={ classNames(s.Modal, mods, [className]) }>
                <div className={ s.overlay } onClick={ closeHandler }>
                    <div className={ s.content } onClick={ onContentClick }>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
