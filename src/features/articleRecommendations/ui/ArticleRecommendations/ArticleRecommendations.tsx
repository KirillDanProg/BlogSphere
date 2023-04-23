import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Text } from 'shared/ui/Text/Text'
import { ArticlesList, ArticleView } from 'entities/Arcticle'
import { useFetchArticleRecommendationsQuery } from '../../api'
import { classNames } from 'shared/lib/classNames/classNames'
import { HStack } from 'shared/ui/Stack/HStack/HStack'
import s from './ArticleRecommendations.module.scss'
import { VStack } from 'shared/ui/Stack/VStack/VStack'

interface ArticleRecommendationsProps {
    className?: string
}

export const ArticleRecommendations = memo((props: ArticleRecommendationsProps) => {
    const { className } = props
    const { t } = useTranslation('articleDetails')

    const {
        data = [],
        isLoading
    } = useFetchArticleRecommendationsQuery(4)

    return (
        <VStack
            gap="16"
            className={ classNames(s.ArticleRecommendations, {}, [className]) }
        >
            <Text
                title={ t('recommendations') }
            />
            <HStack max={ true } justify="between">
                <ArticlesList
                    view={ ArticleView.GRID }
                    articles={ data }
                    target={ '_blank' }
                    isLoading={ isLoading }
                    virtualized={ false }
                />
            </HStack>
        </VStack>
    )
})
