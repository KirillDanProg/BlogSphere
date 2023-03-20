import { type FC, memo, useEffect } from 'react'
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

interface ArticleDetailsProps {
    className?: string
    articleId: string
}

const asyncReducers: ReducersListType = {
    articleDetails: articleDetailsReducer
}
export const ArticleDetails: FC<ArticleDetailsProps> = memo((props) => {
    const { t } = useTranslation()

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
        convertedDate = new Date(articleData?.createdAt || '').toUTCString()
            .slice(5, 16)
    }

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