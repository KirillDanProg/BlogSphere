import { type FC, memo, useMemo, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { Button, ButtonSize, ButtonVariant } from 'shared/ui/Button/Button'
import s from './Sidebar.module.scss'
import { ThemeSwitcher } from 'shared/ui'
import AngleLeft from 'shared/assets/icons/angles-left-solid.svg'
import AngleRight from 'shared/assets/icons/angles-right-solid.svg'
import { SidebarItemsList } from 'widgets/Sidebar/model/items'
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = memo((props) => {
    const [collapsed, setCollapsed] = useState(true)
    const toggleSidebar = () => {
        setCollapsed(!collapsed)
    }

    const itemsList = useMemo(() => {
        return SidebarItemsList.map((item) => <SidebarItem
            key={ item.path }
            text={ item.text }
            path={ item.path }
            Icon={ item.Icon }
            authOnly={ item.authOnly }
            collapsed={ collapsed }
        />)
    }, [collapsed])

    return (
        <div
            data-testid="sidebar"
            className={ classNames(s.Sidebar, { [s.collapsed]: collapsed }) }>

            <div className={ s.items }>
                {itemsList}
            </div>

            <Button
                data-testid="sidebar-toggle"
                className={ s.toggleSidebar }
                onClick={ toggleSidebar }
                variant={ ButtonVariant.PRIMARY }
                size={ ButtonSize.M }
                square
            >
                {
                    collapsed
                        ? <AngleRight width="18px"/>
                        : <AngleLeft width="18px"/>
                }
            </Button>
            <div className={ s.switchers }>
                <ThemeSwitcher className={ s.themeSwitcher }/>
                <LangSwitcher className={ s.langSwitcher }/>
            </div>
        </div>
    )
})
