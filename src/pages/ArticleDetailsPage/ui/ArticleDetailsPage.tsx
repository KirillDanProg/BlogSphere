import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    // const { t } = useTranslation()

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={ classNames(s.ArticleDetailsPage) }>
            Article Details Page
        </div>
    )
}
export default memo(ArticleDetailsPage)
