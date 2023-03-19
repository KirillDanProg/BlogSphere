import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './ArticleDetailsPage.module.scss'
import { ArticleDetails } from 'entities/Arcticle'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { t } = useTranslation('articleDetails')
    const { className } = props
    const { id } = useParams<{ id: string }>()

    if (!id) {
        return (
            <div className={ classNames(s.ArticleDetailsPage, {}, [className]) }>
                {t('not-found')}
            </div>
        )
    }

    return (
        <div className={ classNames(s.ArticleDetailsPage, {}, [className]) }>
            <ArticleDetails
                articleId={ id }
            />
        </div>
    )
}
export default memo(ArticleDetailsPage)
