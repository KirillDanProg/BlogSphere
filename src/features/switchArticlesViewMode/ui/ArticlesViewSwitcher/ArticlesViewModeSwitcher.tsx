import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './ArticleViewModeSwitcher.module.scss'
import { ArticleView } from 'entities/Arcticle'
import GridIcon from 'shared/assets/icons/gridIcon.svg'
import ListIcon from 'shared/assets/icons/list.svg'
import { Icon } from 'shared/ui/Icon/Icon'
import { Button } from 'shared/ui'
import { ButtonVariant } from 'shared/ui/Button/Button'

interface ArticleViewModeSwitcherProps {
    className?: string
    view?: ArticleView
    onChangeViewMode?: (mode: ArticleView) => void
}

const viewMode = [
    {
        type: ArticleView.GRID,
        icon: GridIcon
    },
    {
        type: ArticleView.LIST,
        icon: ListIcon

    }
]
export const ArticlesViewModeSwitcher: FC<ArticleViewModeSwitcherProps> = (props) => {
    const {
        onChangeViewMode,
        view
    } = props

    const onClickHandler = (mode: ArticleView) => () => {
        onChangeViewMode?.(mode)
    }
    return (
        <div className={ classNames(s.ArticleViewModeSwitcher) }>
            {
                viewMode.map(({
                    icon,
                    type
                }) => (
                    <Button
                        key={ type }
                        onClick={ onClickHandler(type) }
                        variant={ ButtonVariant.NO_HOVER }
                        className={ classNames(s.viewModeBtn, { [s.selected]: type === view }, []) }
                    >
                        <Icon className={ s.icon } Svg={ icon }/>
                    </Button>
                ))
            }
        </div>
    )
}
