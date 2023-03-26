import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Card } from 'shared/ui/Card/Card'
import s from './ArticleListItem.module.scss'
import { type ArticleType, ArticleViewType } from '../../model/types/article'
import { convertDate } from 'shared/lib/helpers/convertDate'
import { Icon } from 'shared/ui/Icon/Icon'
import EyeIcon from 'shared/assets/icons/eye-solid.svg'
import { Text } from 'shared/ui/Text/Text'
import { type StatusType } from 'app/types/global'
import {
    ArticleListItemSkeleton
} from 'entities/Arcticle/ui/ArticleListItemSkeleton/ArticleListItemSkeleton'
import { AppLink } from 'shared/ui'
import { RoutePath } from 'shared/config/routes/routes'
import { AppLinkVariant } from 'shared/ui/AppLink/AppLink'

interface ArticleListItemProps {
    className?: string
    view?: ArticleViewType
    article: ArticleType
    status?: StatusType
}

export const ArticleListItem: FC<ArticleListItemProps> = (props) => {
    const {
        view = ArticleViewType.SMALL,
        article,
        className,
        status
    } = props

    const convertedDate = convertDate(article.createdAt)

    const tags = article.tags
        .map(tag => tag.toUpperCase())
        .join(', ')

    if (status === 'loading') {
        return <ArticleListItemSkeleton/>
    }
    return (
        <Card className={ classNames(s.ArticleListItem, {}, [className, s[view]]) }>
            <AppLink
                variant={ AppLinkVariant.WITHOUT_STYLE }
                to={ RoutePath.article_details_page + article._id }>
                <div className={ s.imgWrapper }>
                    <img
                        src={ 'https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg' }/>
                    <span className={ s.date }>{convertedDate}</span>
                </div>
                <div className={ s.infoWrapper }>
                    <div className={ s.tags }>
                        {tags}
                    </div>
                    <span className={ s.views }>
                        {article.viewCount}
                    </span>
                    <Icon
                        className={ s.viewIcon }
                        Svg={ EyeIcon }/>
                </div>
                <Text
                    className={ s.title }
                    title={ article.title }/>
            </AppLink>
        </Card>
    )
}
