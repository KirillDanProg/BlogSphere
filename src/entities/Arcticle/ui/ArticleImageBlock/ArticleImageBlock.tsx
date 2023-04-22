import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './ArticleImageBlock.module.scss'
import { useTranslation } from 'react-i18next'

interface ArticleImageBlockProps {
    className?: string
    src: string
}

export const ArticleImageBlock: FC<ArticleImageBlockProps> = (props) => {
    const {
        src,
        className
    } = props
    const { t } = useTranslation()
    return (
        <img
            alt={ t('article image') }
            src={ src }
            className={ classNames(s.ArticleImageBlock, {}, [className]) }
        />
    )
}
