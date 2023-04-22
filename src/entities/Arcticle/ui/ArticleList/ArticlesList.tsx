import { type FC } from 'react'
import { type ArticleType, ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { type StatusType } from 'app/types/global'
import { ArticleListItemSkeleton } from '../ArticleListItemSkeleton/ArticleListItemSkeleton'
import { Virtuoso, VirtuosoGrid } from 'react-virtuoso'
import s from './ArticleList.module.scss'
import { Loader } from 'shared/ui/Loader/Loader'

interface ArticleListProps {
    className?: string
    articles: ArticleType[]
    view?: ArticleView
    status?: StatusType
    target?: string
    isLoading?: boolean
    onScrollEnd?: () => void
}

export const ArticlesList: FC<ArticleListProps> = (props) => {
    const {
        articles,
        view = ArticleView.GRID,
        target,
        onScrollEnd,
        isLoading
    } = props

    if (isLoading) {
        return <Loader/>
    }
    const renderArticles = (index: number) => {
        return (
            <ArticleListItem
                key={ articles[index]._id }
                article={ articles[index] }
                view={ view }
                target={ target }
                style={ { marginBottom: '70px' } }
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
                        endReached={ onScrollEnd }
                    />
                    : <VirtuosoGrid
                        style={ {
                            height: '100%'
                        } }
                        listClassName={ s.GRID }
                        totalCount={ articles.length }
                        itemContent={ renderArticles }
                        endReached={ onScrollEnd }
                        components={ {
                            ScrollSeekPlaceholder: () => {
                                return (
                                    <ArticleListItemSkeleton view={ view }/>
                                )
                            }
                        } }
                        scrollSeekConfiguration={ {
                            enter: velocity => Math.abs(velocity) > 150,
                            exit: velocity => Math.abs(velocity) < 30
                        } }
                    />
            }
        </>
    )
}
