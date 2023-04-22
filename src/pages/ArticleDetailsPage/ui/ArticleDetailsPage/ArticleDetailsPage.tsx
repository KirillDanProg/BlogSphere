import { type FC, memo } from 'react'
import s from './ArticleDetailsPage.module.scss'
import { ArticleDetails } from 'entities/Arcticle'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    type ReducersListType
} from 'shared/lib/components/DynamicModuleLoader'
import { Page } from 'widgets/Page/ui/Page'
import { articleDetailsPageReducer } from '../../model/slice'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import { ArticleRecommendations } from 'features/articleRecommendations'
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments'

interface ArticleDetailsPageProps {
    className?: string
}

const asyncReducers: ReducersListType = {
    articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { t } = useTranslation('articleDetails')
    const { className } = props
    const { id = '1' } = useParams<{ id: string }>()

    if (!id) {
        return (
            <div className={ classNames(s.ArticleDetailsPage, {}, [className]) }>
                {t('not-found')}
            </div>
        )
    }

    return (
        <DynamicModuleLoader
            removeAfterUnmount={ true }
            reducers={ asyncReducers }>
            <Page className={ classNames(s.ArticleDetailsPage, {}, [className]) }>
                <ArticleDetailsPageHeader/>
                <ArticleDetails articleId={ id }/>
                <ArticleRecommendations/>
                <ArticleDetailsComments id={ id }/>
            </Page>
        </DynamicModuleLoader>
    )
}
export default memo(ArticleDetailsPage)
