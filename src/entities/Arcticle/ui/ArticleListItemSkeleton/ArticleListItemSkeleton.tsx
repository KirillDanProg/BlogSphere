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
            <Card className={classNames(s.ArticleListItem, {}, [className, s[view]])}>
                <div className={s.header}>
                    <Skeleton width={40} height={40} />
                    <Skeleton
                        width={100} height={16}
                    />
                    <Skeleton
                        width={60} height={16}
                    />
                </div>
                <Skeleton
                    width={400} height={40}
                />
                <Skeleton width={200} height={20} />
                <Skeleton
                    width={'100%'}
                    height={700}
                    className={s.textBlock}
                />
            </Card>
        )
    }

    return (
        <Card className={classNames(s.ArticleListItem, {}, [className, s[view]])}>
            <Skeleton width={'100%'} height={'80%'} borderRadius={20} className={s.imgWrapper} />
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                gap: '8px',
                margin: '12px 0'
            }}>
                <Skeleton width={'50%'} height={20} />

                <Skeleton className={s.views} width={50} height={16} />

                <Skeleton
                    width={'60%'} height={24}
                />

                <div style={{ width: '100%', marginLeft: '70%' }}>
                    <Skeleton
                        height={16}
                        width={90}
                    />
                </div>
            </div>
        </Card>
    )
}
