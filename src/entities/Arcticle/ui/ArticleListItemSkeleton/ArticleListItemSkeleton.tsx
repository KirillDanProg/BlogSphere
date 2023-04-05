import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Card } from 'shared/ui/Card/Card'
import s from '../ArticleListItem/ArticleListItem.module.scss'
import { ArticleView } from '../../model/types/article'
import { Skeleton } from 'shared/ui/Skeleton/ui/Skeleton'

interface ArticleListItemProps {
    className?: string
    view?: ArticleView
}

export const ArticleListItemSkeleton: FC<ArticleListItemProps> = (props) => {
    const {
        view = ArticleView.GRID,
        className
    } = props

    if (view === ArticleView.LIST) {
        return (
            <Card className={ classNames(s.ArticleListItem, {}, [className, s[view]]) }>
                <div className={ s.header }>
                    <Skeleton width={ 40 } height={ 40 }/>
                    <Skeleton
                        className={ s.userName }
                        width={ 100 } height={ 16 }
                    />
                    <Skeleton
                        width={ 60 } height={ 16 }
                        className={ s.date }/>
                </div>
                <Skeleton
                    className={ s.title }
                    width={ 400 } height={ 40 }
                />
                <Skeleton width={ 200 } height={ 20 } className={ s.tags }/>
                <Skeleton
                    width={ '100%' }
                    height={ 700 }
                    className={ s.textBlock }
                />
            </Card>
        )
    }

    return (
        <Card className={ classNames(s.ArticleListItem, {}, [className, s[view]]) }>
            <Skeleton width={ '100%' } height={ '80%' } borderRadius={ 20 } className={ s.imgWrapper }/>
            <div className={ s.infoWrapper }>
                <Skeleton width={ 150 } height={ 20 } className={ s.tags }/>

                <Skeleton className={ s.views } width={ 50 } height={ 16 }/>

                <Skeleton
                    className={ s.viewIcon }
                />
            </div>
            <Skeleton
                width={ 250 } height={ 24 }
                className={ s.title }
            />
        </Card>
    )
}
