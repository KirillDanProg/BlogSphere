import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Card } from 'shared/ui/Card/Card'
import { convertDate } from 'shared/lib/helpers/convertDate'
import { Icon } from 'shared/ui/Icon/Icon'
import EyeIcon from 'shared/assets/icons/eye-solid.svg'
import { Text } from 'shared/ui/Text/Text'
import { AppLink } from 'shared/ui'
import { RoutePath } from 'shared/config/routes/routes'
import { AppLinkVariant } from 'shared/ui/AppLink/AppLink'
import { type StatusType } from 'app/types/global'
import {
    ArticleBlockVariant,
    type ArticleTextBlockType,
    type ArticleType,
    ArticleView
} from '../../model/types/article'
import { ArticleListItemSkeleton } from '../ArticleListItemSkeleton/ArticleListItemSkeleton'
import s from './ArticleListItem.module.scss'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock'
import { blocks } from 'data/db'
import { useTranslation } from 'react-i18next'

const articleBlocks = blocks

interface ArticleListItemProps {
    className?: string
    view?: ArticleView
    article: ArticleType
    status?: StatusType
}

export const ArticleListItem: FC<ArticleListItemProps> = (props) => {
    const {
        view = ArticleView.GRID,
        article,
        className,
        status
    } = props
    const { t } = useTranslation('articleDetails')
    const convertedDate = convertDate(article.createdAt)

    const tags = article.tags
        .map(tag => tag.toUpperCase())
        .join(', ')

    if (status === 'loading') {
        return <ArticleListItemSkeleton/>
    }
    if (view === ArticleView.LIST) {
        return (
            <Card className={ classNames(s.ArticleListItem, {}, [className, s[view]]) }>
                <div className={ s.header }>
                    <Avatar
                        size={ 50 }
                        /* eslint-disable-next-line */
                        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1DeyZNqRdLF9WiyJOo7YQW5HxbSp3F6tNQQ&usqp=CAU'}/>
                    <Text
                        className={ s.userName }
                        /* eslint-disable-next-line */
                        text={'Kirill'}
                    />
                    <span className={ s.date }>{convertedDate}</span>
                </div>
                <Text
                    className={ s.title }
                    title={ article.title }
                />
                <div className={ s.tags }>
                    {tags}
                </div>
                <div className={ s.imgWrapper }>
                    <img
                        src={ 'https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg' }
                    />
                </div>
                <ArticleTextBlock
                    className={ s.textBlock }
                    block={ articleBlocks.find(block => block.type === ArticleBlockVariant.TEXT) as ArticleTextBlockType }
                />
                <AppLink
                    className={ s.readMore }
                    variant={ AppLinkVariant.INVERTED }
                    to={ RoutePath.article_details_page + article._id }>
                    {t('readMore')}
                </AppLink>
            </Card>
        )
    }
    return (
        <Card className={ classNames(s.ArticleListItem, {}, [className, s[view]]) }>
            <AppLink
                variant={ AppLinkVariant.WITHOUT_STYLE }
                to={ RoutePath.article_details_page + article._id }>
                <div className={ s.imgWrapper }>
                    <img
                        src={ 'https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg' }
                    />
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
