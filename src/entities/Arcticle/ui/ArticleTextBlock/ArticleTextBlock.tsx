import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './ArticleTextBlock.module.scss'
import { type ArticleTextBlockType } from '../../model/types/article'
import { Text } from 'shared/ui/Text/Text'

interface ArticleTextBlockProps {
    className?: string
    block: ArticleTextBlockType
}

export const ArticleTextBlock: FC<ArticleTextBlockProps> = (props) => {
    const {
        block,
        className
    } = props
    const renderParagraphs = (paragraph: string) => {
        return <Text
            key={ paragraph }
            text={ paragraph }
            className={ s.paragraph }
        />
    }

    return (
        <div className={ classNames(s.ArticleTextBlock, {}, [className]) }>
            {
                block.title && <Text title={ block.title } className={ s.title }/>
            }
            {
                block.paragraphs.map(renderParagraphs)
            }
        </div>
    )
}
