import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './LoginModal.module.scss'
import { LoginForm } from 'features/AuthByUserName/ui/LoginForm/LoginForm'
import { Modal } from 'shared/ui/Modal/Modal'
import CloseModal from 'shared/assets/icons/close-icon.svg'
import { Button } from 'shared/ui'
import { ButtonVariant } from 'shared/ui/Button/Button'

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = (props) => {
    const {
        onClose,
        isOpen
    } = props
    return (
        <div className={ classNames(s.LoginModal) }>
            <Modal
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
