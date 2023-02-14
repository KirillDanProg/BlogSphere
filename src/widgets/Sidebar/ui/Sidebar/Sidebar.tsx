import { type FC, Suspense, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeSwitcher } from 'shared/ui'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import s from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const [collapsed, setCollapsed] = useState(true)
    const toggleSidebar = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div className={ classNames(s.Sidebar, { [s.collapsed]: collapsed }) }>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button onClick={ toggleSidebar }>
                Toggle
            </Button>
            <div className={ s.switchers }>
                <ThemeSwitcher/>
                <Suspense fallback="">
                    <LangSwitcher/>
                </Suspense>
            </div>
        </div>
    )
}
