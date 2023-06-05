import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './ArticlesSortSelector.module.scss'
import { useTranslation } from 'react-i18next'
import { type SelectOptionType } from 'shared/ui/Select/Select'
import { ArticleSortField } from '../../model/types/article'
import { type SortOrderType } from 'shared/types/articlesFilter'
import { ListBox } from 'shared/ui/Popups/ui/ListBox/Listbox'

interface ArticlesSortSelectorProps {
    className?: string
    order: SortOrderType
    sortBy: ArticleSortField
    onOrderChange: (order: SortOrderType) => void
    onSortChange: (sortBy: ArticleSortField) => void
}

export const ArticlesSortSelector: FC<ArticlesSortSelectorProps> = (props) => {
    const {
        onSortChange,
        sortBy,
        onOrderChange,
        order
    } = props
    const { t } = useTranslation()

    const orderOptions: Array<SelectOptionType<SortOrderType>> = [
        {
            value: 'asc',
            content: t('asc')
        },
        {
            value: 'desc',
            content: t('desc')
        }
    ]
    const sortByOptions: Array<SelectOptionType<ArticleSortField>> = [
        {
            value: ArticleSortField.VIEWS,
            content: t('sort-views')
        },
        {
            value: ArticleSortField.DATE,
            content: t('sort-date')
        },
        {
            value: ArticleSortField.TITLE,
            content: t('sort-title')
        }
    ]
    return (
        <div className={ classNames(s.ArticlesSortSelector) }>
            <ListBox<SortOrderType>
                value={ order }
                onChange={ onOrderChange }
                items={ orderOptions }
            />
            <ListBox<ArticleSortField>
                value={ sortBy }
                onChange={ onSortChange }
                items={ sortByOptions }
            />
        </div>
    )
}
