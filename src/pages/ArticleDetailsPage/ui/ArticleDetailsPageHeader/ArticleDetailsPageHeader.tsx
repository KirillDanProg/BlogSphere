import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Icon } from 'shared/ui/Icon/Icon'
import BackToIcon from 'shared/assets/icons/arrow-left.svg'
import { Button } from 'shared/ui'
import { RoutePath } from 'shared/config/routes/routes'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import s from './ArticleDetailsPageHeader.module.scss'
import { getAllowArticleEdit } from '../../model/selectors/article'
import { ButtonVariant } from 'shared/ui/Button/Button'
import { getArticleDetailsData } from 'entities/Arcticle/model/selectors/articleDetails'
import { HStack } from 'shared/ui/Stack/HStack/HStack'

interface ArticleDetailsPageHeaderProps {
    className?: string
}

export const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = (props) => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const allowEditing = useSelector(getAllowArticleEdit)
    const articleData = useSelector(getArticleDetailsData)
    const backToArticleListHandler = () => {
        navigate(RoutePath.articles)
    }
    const goToEditPage = () => {
        navigate(`${RoutePath.article_details_page}${articleData?._id}/edit`)
    }

    return (
        <HStack justify="between" align="center" className={ classNames(s.ArticleDetailsPageHeader) }>
            <Button
                className={ s.backToBtn }
                onClick={ backToArticleListHandler }
            >
                <Icon Svg={ BackToIcon }/>
            </Button>
            {
                allowEditing &&
                <Button
                    onClick={ goToEditPage }
                    variant={ ButtonVariant.INVERTED_OUTLINED }
                    className={ s.edit }>
                    {t('edit')}
                </Button>
            }
        </HStack>
    )
}
