import { type FC, memo } from 'react'
import s from './SidebarItem.module.scss'
import { useTranslation } from 'react-i18next'
import { AppLink } from 'shared/ui'
import { classNames } from 'shared/lib/classNames/classNames'
import { type SidebarItemType } from 'widgets/Sidebar/model/types/sidebarItems'

interface PropsType extends SidebarItemType {
    collapsed: boolean
    setActive: (path: string) => void
    active: boolean
}

export const SidebarItem: FC<PropsType> = memo((props) => {
    const {
        path,
        text,
        Icon,
        collapsed,
        setActive,
        active
    } = props
    const { t } = useTranslation()

    const onClickHandler = () => {
        setActive(path)
    }

    return (
        <AppLink
            onClick={ onClickHandler }
            className={ classNames(s.item, {
                [s.collapsed]: collapsed,
                [s.active]: active
            }, []) }
            to={ path }>
            <Icon width="20px" height="20px" className={ s.icon }/>
            <span className={ s.linkTitle }>{t(text)}</span>
        </AppLink>
    )
})
