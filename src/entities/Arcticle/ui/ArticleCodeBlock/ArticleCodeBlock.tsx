import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './ArticleCodeBlock.module.scss'
import { type ArticleCodeBlockType } from '../../model/types/article'
import { Code } from 'shared/ui/Code/Code'

interface ArticleCodeBlockProps {
    className?: string
    block: ArticleCodeBlockType
}

export const ArticleCodeBlock: FC<ArticleCodeBlockProps> = (props) => {
    const {
        block,
        className
    } = props

    return (
        <div className={ classNames(s.ArticleCodeBlock, {}, [className]) }>
            <Code code={ block.code }/>
        </div>
    )
}
