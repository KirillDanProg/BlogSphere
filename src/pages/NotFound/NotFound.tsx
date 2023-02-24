import s from './NotFound.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

export const NotFound = () => {
    const { t } = useTranslation()
    return (
        <h1 className={ classNames(s.NotFound) }>
            {t('not-found')}
        </h1>
    )
}
