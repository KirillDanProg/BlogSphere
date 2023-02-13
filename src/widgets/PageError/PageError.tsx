import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import s from './PageError.module.scss'

interface PageErrorProps {
    className?: string
}

export const PageError: FC<PageErrorProps> = () => {
    const { t } = useTranslation()
    return (
        <div className={ classNames(s.PageError) }>
            {t('Something went wrong')}
        </div>
    )
}
