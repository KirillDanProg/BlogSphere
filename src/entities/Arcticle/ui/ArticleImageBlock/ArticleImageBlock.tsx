import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './ArticleImageBlock.module.scss'

interface ArticleImageBlockProps {
    className?: string
}

export const ArticleImageBlock: FC<ArticleImageBlockProps> = (props) => {
    // const { t } = useTranslation()

    return (
        <div className={ classNames(s.ArticleImageBlock) }>
        </div>
    )
}
