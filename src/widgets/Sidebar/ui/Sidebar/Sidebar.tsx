import { type FC, memo, useMemo, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { Button, ButtonSize, ButtonVariant } from 'shared/ui/Button/Button'
import s from './Sidebar.module.scss'
import { ThemeSwitcher } from 'shared/ui'
import AngleLeft from 'shared/assets/icons/angles-left-solid.svg'
import AngleRight from 'shared/assets/icons/angles-right-solid.svg'
import { SidebarItem } from '../../ui/SidebarItem/SidebarItem'
import { useSelector } from 'react-redux'
import { getSidebarItems } from '../../model/selectors/sidebarSelectors'
import { VStack } from 'shared/ui/Stack/VStack/VStack'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = memo((props) => {
    const [collapsed, setCollapsed] = useState(false)
    const sidebarItemsList = useSelector(getSidebarItems)
    const toggleSidebar = () => {
        setCollapsed(!collapsed)
    }

    const [activePath, setActivePath] = useState<string>()
    const setActiveHandler = (path: string) => {
        setActivePath(path)
    }
    const itemsList = useMemo(() => {
        return sidebarItemsList.map((item: any) => {
            return <SidebarItem
                key={item.path}
                text={item.text}
                path={item.path}
                Icon={item.Icon}
                collapsed={collapsed}
                setActive={setActiveHandler}
                active={activePath === item.path}
            />
        })
    }, [collapsed, activePath, sidebarItemsList])

    return (
        <aside
            data-testid="sidebar"
            className={classNames(s.Sidebar, { [s.collapsed]: collapsed })}>

            <VStack role="navigation" gap="16" className={s.items}>
                {itemsList}
            </VStack>

            <Button
                data-testid="sidebar-toggle"
                className={s.toggleSidebar}
                onClick={toggleSidebar}
                variant={ButtonVariant.PRIMARY}
                size={ButtonSize.M}
                square
            >
                {
                    collapsed
                        ? <AngleRight width="18px" />
                        : <AngleLeft width="18px" />
                }
            </Button>
            <div className={s.switchers}>
                <ThemeSwitcher className={s.themeSwitcher} />
                <LangSwitcher className={s.langSwitcher} />
            </div>
        </aside>
    )
})
