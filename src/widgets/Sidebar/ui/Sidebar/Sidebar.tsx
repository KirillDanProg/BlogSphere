import { type FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'
import s from './Sidebar.module.scss'
import { ThemeSwitcher } from 'shared/ui'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const [collapsed, setCollapsed] = useState(true)
    const toggleSidebar = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div
            data-testid="sidebar"
            className={ classNames(s.Sidebar, { [s.collapsed]: collapsed }) }>
            <Button
                data-testid="sidebar-toggle"
                onClick={ toggleSidebar }
                variant={ ButtonVariant.OUTLINED }
            >
                Toggle
            </Button>
            <div className={ s.switchers }>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>
        </div>
    )
}
