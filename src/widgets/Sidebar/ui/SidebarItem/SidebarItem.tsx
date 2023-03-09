import { type FC, memo } from 'react'
import s from './SidebarItem.module.scss'
import { useTranslation } from 'react-i18next'
import { AppLink } from 'shared/ui'
import { type SidebarItemType } from 'widgets/Sidebar/model/items'
import { classNames } from 'shared/lib/classNames/classNames'

interface PropsType extends SidebarItemType {
    collapsed: boolean
}

export const SidebarItem: FC<PropsType> = memo((props) => {
    const {
        path,
        text,
        Icon,
        collapsed
    } = props
    const { t } = useTranslation('sidebar')

    return (
        <AppLink className={ classNames(s.item, { [s.collapsed]: collapsed }, []) } to={ path }>
            <Icon width="20px" height="20px" className={ s.icon }/>
            <span className={ s.linkTitle }>{t(text)}</span>
        </AppLink>
    )
})
