import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './ArticleTextBlock.module.scss'

interface ArticleTextBlockProps {
    className?: string
}

export const ArticleTextBlock: FC<ArticleTextBlockProps> = (props) => {
    // const { t } = useTranslation()

    return (
        <div className={ classNames(s.ArticleTextBlock) }>
        </div>
    )
}
