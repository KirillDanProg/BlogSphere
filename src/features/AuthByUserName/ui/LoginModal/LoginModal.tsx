import { type FC, Suspense, useEffect, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import { Button } from 'shared/ui'
import { ButtonVariant } from 'shared/ui/Button/Button'
import CloseModal from 'shared/assets/icons/close-icon.svg'
import s from './LoginModal.module.scss'
import { getAuthStatus } from '../../model/selectors/getAuthStatus'
import { useSelector } from 'react-redux'
import { getUserId } from 'entities/User/model/selectors/getUserId'
import { LoginFormLazy } from 'features/AuthByUserName/ui/LoginForm/LoginFormLazy'
import { Loader } from 'shared/ui/Loader/Loader'

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

    const [haveAnAccount, setHaveAccount] = useState(true)
    const registerStatus = useSelector(getAuthStatus)
    const isAuth = useSelector(getUserId)

    const goToSignUpHandler = () => {
        setHaveAccount(false)
    }
    const goToSignInHandler = () => {
        setHaveAccount(true)
    }

    useEffect(() => {
        if (registerStatus === 'succeeded') {
            setHaveAccount(true)
        }
    }, [registerStatus])

    useEffect(() => {
        if (isAuth) {
            onClose()
        }
    }, [isAuth, onClose])

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
                <Suspense fallback={ <Loader/> }>
                    <LoginFormLazy
                        goToSignUp={ goToSignUpHandler }
                        goToSignIn={ goToSignInHandler }
                        haveAnAccount={ haveAnAccount }/>
                </Suspense>

            </Modal>
        </div>
    )
}
