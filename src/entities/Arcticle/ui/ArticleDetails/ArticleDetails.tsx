import { type FC, memo, useCallback, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './ArticleDetails.module.scss'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import {
    DynamicModuleLoader,
    type ReducersListType
} from 'shared/lib/components/DynamicModuleLoader'
import { fetchArticleByIdThunk } from '../../model/services/fetchArticleById'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { useSelector } from 'react-redux'
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsStatus
} from '../../model/selectors/articleDetails'
import { Text, TextAlign, TextSize, TextVariant } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/ui/Skeleton'
import { Icon } from 'shared/ui/Icon/Icon'
import EyeIcon from 'shared/assets/icons/eye-solid.svg'
import CalendarIcon from 'shared/assets/icons/calendar-days-regular.svg'
import { blocks } from 'data/db'
import { type ArticleBlockType, ArticleBlockVariant } from '../../model/types/article'
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock'
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock'
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock'
import { convertDate } from 'shared/lib/helpers/convertDate'

const articleBlocks = blocks as ArticleBlockType[]

interface ArticleDetailsProps {
    className?: string
    articleId: string
}

const asyncReducers: ReducersListType = {
    articleDetails: articleDetailsReducer
}
export const ArticleDetails: FC<ArticleDetailsProps> = memo((props) => {
    const { t } = useTranslation('articleDetails')

    const {
        articleId,
        className
    } = props
    const dispatch = useAppDispatch()
    const error = useSelector(getArticleDetailsError)
    const status = useSelector(getArticleDetailsStatus)
    const articleData = useSelector(getArticleDetailsData)

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            void dispatch(fetchArticleByIdThunk(articleId))
        }
    }, [dispatch, articleId])
    let convertedDate
    if (articleData?.createdAt) {
        convertedDate = convertDate(articleData?.createdAt)
    }

    const renderBlocks = useCallback((block: ArticleBlockType) => {
        switch (block.type) {
            case ArticleBlockVariant.TEXT:
                return <ArticleTextBlock
                    key={ block.id }
                    block={ block }
                    className={ s.block }
                />
            case ArticleBlockVariant.IMAGE:
                return <ArticleImageBlock
                    className={ s.imageBlock }
                    src={ block.src }
                    key={ block.id }/>
            case ArticleBlockVariant.CODE:
                return <ArticleCodeBlock
                    key={ block.id }
                    className={ s.block }
                    block={ block }
                />
            default:
                return null
        }
    }, [])

    let content
    if (status === 'loading') {
        content = (
            <div className={ classNames(s.ArticleDetails, {}, [className]) }>
                <Skeleton className={ s.avatar }
                    height={ 100 } width={ 100 } borderRadius={ '50%' }/>
                <Skeleton className={ s.title }
                    height={ 20 } width={ 200 }/>
                <Skeleton className={ s.views }
                    height={ 20 } width={ 400 }/>
                <Skeleton className={ s.skeleton }
                    height={ 400 } width={ '100%' }/>
                <Skeleton className={ s.skeleton }
                    height={ 400 } width={ '100%' }/>
            </div>
        )
    } else if (error) {
        content = (
            <Text
                variant={ TextVariant.ERROR }
                title={ t('pageError') }
                align-={ TextAlign.CENTER }
            />
        )
    } else {
        content = <div className={ classNames(s.ArticleDetails, {}, [className]) }>
            <Text
                size={ TextSize.L }
                title={ articleData?.title }
                text={ articleData?.text }
            />
            <div className={ s.articleInfo }>
                <Icon
                    className={ s.icon }
                    Svg={ EyeIcon }/>
                <Text text={ String(articleData?.viewCount) }/>
            </div>
            <div className={ s.articleInfo }>
                <Icon
                    className={ s.icon }
                    Svg={ CalendarIcon }/>
                <Text text={ convertedDate }/>
            </div>
            <div className={ s.blocks }>
                {articleBlocks.map(renderBlocks)}
            </div>
        </div>
    }
    return (
        <DynamicModuleLoader
            reducers={ asyncReducers }
            removeAfterUnmount={ true }
        >
            {content}
        </DynamicModuleLoader>
    )
})
