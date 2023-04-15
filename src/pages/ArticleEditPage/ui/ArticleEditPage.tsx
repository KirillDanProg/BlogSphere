import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './ArticleEditPage.module.scss'
import { Page } from 'widgets/Page'
import { useParams } from 'react-router-dom'

interface ArticleDetailsEditPageProps {
    className?: string
}

const ArticleEditPage: FC<ArticleDetailsEditPageProps> = (props) => {
    const { id } = useParams()
    const isEdit = Boolean(id)

    return (
        <Page className={ classNames(s.ArticleDetailsEditPage) }>
            {
                isEdit ? `Edit page: ${id}` : 'Create page'
            }
        </Page>
    )
}

export default ArticleEditPage
