import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import s from './PageError.module.scss'
import { Button } from 'shared/ui'
import { ButtonVariant } from 'shared/ui/Button/Button'

interface PageErrorProps {
    className?: string
}

export const PageError: FC<PageErrorProps> = () => {
    const { t } = useTranslation()
    const reloadPage = () => {
        location.reload()
    }
    return (
        <div className={ classNames(s.PageError) }>
            <h2>
                {t('Something went wrong')}
            </h2>
            <Button
                onClick={ reloadPage }
                variant={ ButtonVariant.PRIMARY }>
                {t('reload page')}
            </Button>
        </div>
    )
}
