import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import { Button } from 'shared/ui'
import { ButtonVariant } from 'shared/ui/Button/Button'
import { LoginForm } from 'features/AuthByUserName'
import CloseModal from 'shared/assets/icons/close-icon.svg'
import s from './LoginModal.module.scss'

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
    lazy?: boolean
}

export const LoginModal: FC<LoginModalProps> = (props) => {
    const {
        onClose,
        isOpen
    } = props
    return (
        <div className={ classNames(s.LoginModal) }>
            <Modal
                lazy
                isOpen={ isOpen }
                overlayClose={ false }
            >
                <Button className={ s.closeBtn } variant={ ButtonVariant.PRIMARY }>
                    <CloseModal onClick={ onClose }/>
                </Button>
                <LoginForm/>
            </Modal>
        </div>
    )
}
