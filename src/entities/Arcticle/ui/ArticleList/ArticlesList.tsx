import { type FC } from 'react'
import { type ArticleType, ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { type StatusType } from 'app/types/global'
import { ArticleListItemSkeleton } from '../ArticleListItemSkeleton/ArticleListItemSkeleton'
import { Virtuoso, VirtuosoGrid } from 'react-virtuoso'
import s from './ArticleList.module.scss'

interface ArticleListProps {
    className?: string
    articles: ArticleType[]
    view?: ArticleView
    status?: StatusType
    target?: string
}

export const ArticlesList: FC<ArticleListProps> = (props) => {
    const {
        articles,
        view = ArticleView.GRID,
        target
    } = props

    const renderArticles = (index: number) => {
        return (
            <ArticleListItem
                key={ articles[index]._id }
                article={ articles[index] }
                view={ view }
                target={ target }
                style={ { marginBottom: '40px' } }
            />
        )
    }

    return (
        <>
            {
                view === ArticleView.LIST
                    ? <Virtuoso
                        style={ { height: '100%' } }
                        totalCount={ articles.length }
                        itemContent={ renderArticles }
                        components={ {
                            Footer: () => {
                                return <ArticleListItemSkeleton view={ ArticleView.LIST }/>
                            }
                        } }
                        className={ s.LIST }
                    />
                    : <VirtuosoGrid
                        style={ {
                            height: '100%'
                        } }
                        listClassName={ s.GRID }
                        totalCount={ articles.length }
                        itemContent={ renderArticles }
                        components={ {
                            ScrollSeekPlaceholder: () => {
                                return (
                                    <ArticleListItemSkeleton view={ view }/>
                                )
                            }
                        } }
                        scrollSeekConfiguration={ {
                            enter: velocity => Math.abs(velocity) > 50,
                            exit: velocity => Math.abs(velocity) < 10
                        } }
                    />
            }
        </>
    )
}
