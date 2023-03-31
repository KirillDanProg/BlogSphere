import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './ArticleList.module.scss'
import { type ArticleType, ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { type StatusType } from 'app/types/global'

interface ArticleListProps {
    className?: string
    articles: ArticleType[]
    view?: ArticleView
    status?: StatusType
}

export const ArticlesList: FC<ArticleListProps> = (props) => {
    const {
        articles,
        className,
        view = ArticleView.GRID,
        status
    } = props

    const renderArticles = (article: ArticleType) => {
        return (
            <ArticleListItem
                key={ article._id }
                status={ status }
                article={ article }
                view={ view }
            />
        )
    }

    return (
        <div className={ classNames(s.ArticleList, {}, [className, s[view]]) }>
            {
                articles.map(renderArticles)
            }
        </div>
    )
}
