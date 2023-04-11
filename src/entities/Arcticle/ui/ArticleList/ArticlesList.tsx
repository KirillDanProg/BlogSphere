import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './ArticleList.module.scss'
import { type ArticleType, ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { type StatusType } from 'app/types/global'
import {
    ArticleListItemSkeleton
} from 'entities/Arcticle/ui/ArticleListItemSkeleton/ArticleListItemSkeleton'

interface ArticleListProps {
    className?: string
    articles: ArticleType[]
    view?: ArticleView
    status?: StatusType
    target?: string
}

const renderSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.LIST ? 3 : 9).fill(0)
        .map((el, index) => <ArticleListItemSkeleton
            key={ index }
            view={ view }/>)
}
export const ArticlesList: FC<ArticleListProps> = (props) => {
    const {
        articles,
        className,
        view = ArticleView.GRID,
        status,
        target
    } = props

    const renderArticles = (article: ArticleType) => {
        return (
            <ArticleListItem
                key={ article._id }
                article={ article }
                view={ view }
                target={ target }
            />
        )
    }

    return (
        <div className={ classNames(s.ArticleList, {}, [className, s[view]]) }>
            {
                articles.length > 0
                    ? articles.map(renderArticles)
                    : null
            }
            {
                status === 'loading' &&
                renderSkeletons(view)
            }
        </div>
    )
}
