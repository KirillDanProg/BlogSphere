import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './ArticlesPage.module.scss'

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    // const { t } = useTranslation()

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={ classNames(s.ArticlesPage) }>
            Articles page
        </div>
    )
}

export default memo(ArticlesPage)
