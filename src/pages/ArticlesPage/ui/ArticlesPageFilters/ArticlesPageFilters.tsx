import { type FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import Input from 'shared/ui/Input/Input'
import { Icon } from 'shared/ui/Icon/Icon'
import SearchIcon from 'shared/assets/icons/search.svg'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { type SortOrderType } from 'shared/types/articlesFilter'
import s from './ArticlesPageFilters.module.scss'
import {
    ArticlesViewModeSwitcher
} from 'features/switchArticlesViewMode/ui/ArticlesViewSwitcher/ArticlesViewModeSwitcher'
import { type ArticleSortField, type ArticleView } from 'entities/Arcticle'
import {
    ArticlesSortSelector
} from 'entities/Arcticle/ui/ArticlesSortSelector/ArticlesSortSelector'
import { getOrder, getSearch, getSort } from '../../model/selectors'
import { articlesPageActions } from '../../model/slice/articlesPageSlice'
import { saveViewModeToLS } from '../../model/services/saveViewModeToLS/saveViewModeToLS'
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles'
import { useDebounce } from 'shared/lib/hooks/useDebounce'
import { useSearchParams } from 'react-router-dom'

interface ArticlesPageFiltersProps {
    className?: string
    view?: ArticleView
}

export const ArticlesPageFilters: FC<ArticlesPageFiltersProps> = (props) => {
    const {
        className,
        view
    } = props

    const [searchParams, setSearchParams] = useSearchParams()

    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const order = useSelector(getOrder)
    const sortBy = useSelector(getSort)
    const search = useSelector(getSearch)

    const fetchData = useCallback(() => {
        void dispatch(articlesPageActions.setArticlesPageNum(1))
        void dispatch(fetchArticles({
            replace: true,
            setParams: setSearchParams,
            params: searchParams
        }))
    }, [dispatch, setSearchParams, searchParams])

    const debouncedFetchData = useDebounce(fetchData, 500)

    const onChangeSortField = useCallback((sort: ArticleSortField) => {
        void dispatch(articlesPageActions.setSortBy(sort))
        fetchData()
    }, [dispatch, fetchData])
    const onChangeOrderField = useCallback((order: SortOrderType) => {
        void dispatch(articlesPageActions.setOrder(order))
        fetchData()
    }, [dispatch, fetchData])
    const onChangeSearchField = useCallback((search: string) => {
        void dispatch(articlesPageActions.setSearch(search))
        debouncedFetchData()
    }, [dispatch, debouncedFetchData])
    const onChangeViewMode = useCallback((mode: ArticleView) => {
        void dispatch(saveViewModeToLS(mode))
    }, [dispatch])

    return (
        <div className={ classNames(s.ArticlesPageFilters, {}, [className]) }>
            <ArticlesSortSelector
                sortBy={ sortBy }
                order={ order }
                onOrderChange={ onChangeOrderField }
                onSortChange={ onChangeSortField }
            />
            <ArticlesViewModeSwitcher
                view={ view }
                onChangeViewMode={ onChangeViewMode }
            />
            <div className={ s.searchFieldWrapper }>
                <Input
                    label={ t('search') }
                    className={ s.searchInput }
                    value={ search }
                    onChange={ onChangeSearchField }
                />
                <Icon
                    className={ s.searchIcon }
                    Svg={ SearchIcon }/>
            </div>
        </div>
    )
}
