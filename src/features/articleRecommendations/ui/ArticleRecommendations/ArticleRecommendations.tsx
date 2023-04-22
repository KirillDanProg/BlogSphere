import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Text } from 'shared/ui/Text/Text'
import { ArticlesList, ArticleView } from 'entities/Arcticle'
import { useFetchArticleRecommendationsQuery } from '../../api'
import { classNames } from 'shared/lib/classNames/classNames'

interface ArticleRecommendationsProps {
    className?: string
}

export const ArticleRecommendations = memo((props: ArticleRecommendationsProps) => {
    const { className } = props
    const { t } = useTranslation()

    const {
        data,
        isLoading
    } = useFetchArticleRecommendationsQuery(3)

    return (
        <div className={ classNames('', {}, [className]) } style={ { height: '90%' } }>
            <Text
                title={ t('recommendations') }
            />
            <ArticlesList
                view={ ArticleView.GRID }
                articles={ data }
                target={ '_blank' }
                isLoading={ isLoading }
            />
        </div>
    )
})
