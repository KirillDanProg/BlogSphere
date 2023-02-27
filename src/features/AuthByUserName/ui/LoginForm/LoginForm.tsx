import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import s from './LoginForm.module.scss'
import { Button } from 'shared/ui'
import { ButtonVariant } from 'shared/ui/Button/Button'
import Input from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { authRegisterThunk } from '../../model/services/AuthRegister/authRegisterThunk'
import { authLoginThunk } from '../../model/services/AuthLogin/authLoginThunk'
import { getAuthError } from '../../model/selectors/getAuthError'
import { Text, TextVariant } from 'shared/ui/Text/Text'

interface LoginFormProps {
    className?: string
    haveAnAccount?: boolean
    goToSignIn: () => void
    goToSignUp: () => void
}

export const LoginForm: FC<LoginFormProps> = (props) => {
    const {
        haveAnAccount,
        goToSignUp,
        goToSignIn
    } = props
    const { t } = useTranslation('auth')
    const dispatch = useDispatch()
    const authError = useSelector(getAuthError)

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const userName = e.currentTarget.elements.userName?.value
        const email = e.currentTarget.elements.email.value
        const password = e.currentTarget.elements.password.value
        if (haveAnAccount) {
            dispatch(authLoginThunk({
                email,
                password
            }))
        } else {
            dispatch(authRegisterThunk({
                userName,
                email,
                password
            }))
        }
    }

    return (
        <form
            autoComplete={ 'off' }
            onSubmit={ handleSubmit }
            className={ classNames(s.LoginForm) }>

            {
                authError && <Text center variant={ TextVariant.ERROR } title={ authError }/>
            }

            {
                !haveAnAccount &&
                <Input
                    autoComplete={ 'off' }
                    name="userName"
                    autoFocus
                    label={ t('username') }
                    type="text"/>
            }
            <Input
                autoComplete={ 'off' }
                name="email"
                label={ t('email') }
                type="text"/>
            <Input
                autoComplete={ 'off' }
                name="password"
                label={ t('password') }
                type="password"/>
            <div className={ s.buttonsGroup }>
                {
                    haveAnAccount
                        ? <>
                            <Button
                                type="submit"
                                className={ s.loginButton }
                                variant={ ButtonVariant.NO_HOVER }
                                onClick={ goToSignUp }
                            >
                                {t('no-account')}
                            </Button>
                            <Button
                                type="submit"
                                className={ s.loginButton }
                                variant={ ButtonVariant.OUTLINED }
                            >
                                {t('signin')}
                            </Button>
                        </>
                        : <>
                            <Button
                                className={ s.loginButton }
                                variant={ ButtonVariant.NO_HOVER }
                                onClick={ goToSignIn }
                            >
                                {t('have-account')}
                            </Button>
                            <Button
                                className={ s.loginButton }
                                variant={ ButtonVariant.OUTLINED }
                            >
                                {t('signup')}
                            </Button>
                        </>
                }
            </div>
        </form>
    )
}
