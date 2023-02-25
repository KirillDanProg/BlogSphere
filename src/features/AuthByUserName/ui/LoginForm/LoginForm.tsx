import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import s from './LoginForm.module.scss'
import { Button } from 'shared/ui'
import { ButtonVariant } from 'shared/ui/Button/Button'
import Input from 'shared/ui/Input/Input'

interface LoginFormProps {
    className?: string
}

export const LoginForm: FC<LoginFormProps> = (props) => {
    const { t } = useTranslation()

    return (
        <div className={ classNames(s.LoginForm) }>
            <Input
                autoFocus
                label="Username"
                type="text"/>
            <Input
                label="Password"
                type="password"/>
            <Button
                className={ s.loginButton }
                variant={ ButtonVariant.OUTLINED }
            >
                {t('Войти')}
            </Button>
        </div>
    )
}
