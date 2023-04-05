import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './ArticleImageBlock.module.scss'

interface ArticleImageBlockProps {
    className?: string
    src: string
}

export const ArticleImageBlock: FC<ArticleImageBlockProps> = (props) => {
    const {
        src,
        className
    } = props
    return (
        <img
            alt={ 'article image' }
            src={ src }
            className={ classNames(s.ArticleImageBlock, {}, [className]) }
        />
    )
}
