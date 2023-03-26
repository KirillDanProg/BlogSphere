import { type FC, memo, useEffect, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './ArticlesPage.module.scss'
import axios from 'axios'
import { type ArticleType, ArticleView } from 'entities/Arcticle'
import { ArticleList } from 'entities/Arcticle/ui/ArticleList/ArticleList'

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    const [articles, setArticles] = useState<ArticleType[]>([])

    useEffect(() => {
        void axios.get<ArticleType[]>('http://localhost:4444/posts')
            .then(data => {
                setArticles(data.data)
            })
    }, [])

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={ classNames(s.ArticlesPage) }>
            <ArticleList
                view={ ArticleView.LIST }
                articles={ articles || [] }/>
        </div>
    )
}

export default memo(ArticlesPage)
