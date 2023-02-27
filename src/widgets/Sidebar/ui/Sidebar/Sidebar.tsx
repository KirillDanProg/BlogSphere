import { type FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { Button, ButtonSize, ButtonVariant } from 'shared/ui/Button/Button'
import s from './Sidebar.module.scss'
import { AppLink, ThemeSwitcher } from 'shared/ui'
import AngleLeft from 'shared/assets/icons/angles-left-solid.svg'
import AngleRight from 'shared/assets/icons/angles-right-solid.svg'
import HomeItem from 'shared/assets/icons/menu-icons/house-solid.svg'
import InfoItem from 'shared/assets/icons/menu-icons/circle-question-regular.svg'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/routes/routes'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const [collapsed, setCollapsed] = useState(true)
    const { t } = useTranslation()
    const toggleSidebar = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div
            data-testid="sidebar"
            className={ classNames(s.Sidebar, { [s.collapsed]: collapsed }) }>

            <div className={ s.items }>
                <AppLink className={ s.item } to={ RoutePath.main }>
                    <HomeItem width="20px" className={ s.icon }/>
                    <span className={ s.linkTitle }>{t('menu-main')}</span>
                </AppLink>
                <AppLink className={ s.item } to={ RoutePath.about }>
                    <InfoItem width="20px" className={ s.icon }/>
                    <span className={ s.linkTitle }>{t('menu-info')}</span>
                </AppLink>
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
}
