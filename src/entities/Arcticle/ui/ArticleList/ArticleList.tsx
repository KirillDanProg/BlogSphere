import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './ArticleList.module.scss'
import { type ArticleType, type ArticleViewType } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { type StatusType } from 'app/types/global'

interface ArticleListProps {
    className?: string
    articles: ArticleType[]
    view?: ArticleViewType
    status?: StatusType
}

export const ArticleList: FC<ArticleListProps> = (props) => {
    const {
        articles,
        className,
        view,
        status
    } = props

    const renderArticles = (article: ArticleType) => {
        return (
            <ArticleListItem
                status={ status }
                article={ article }
                view={ view }
            />
        )
    }

    return (
        <div className={ classNames(s.ArticleList, {}, [className]) }>
            {
                articles.map(renderArticles)
            }
        </div>
    )
}
