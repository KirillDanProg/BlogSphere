import { RoutePath } from 'shared/config/routes/routes'
import HomeItem from 'shared/assets/icons/menu-icons/house-solid.svg'
import AboutItem from 'shared/assets/icons/menu-icons/circle-question-regular.svg'
import ProfileItem from 'shared/assets/icons/menu-icons/user-solid.svg'
import { type FunctionComponent, type SVGAttributes } from 'react'

export interface SidebarItemType {
    path: string
    text: string
    Icon: FunctionComponent<SVGAttributes<SVGElement>>
    authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'main',
        Icon: HomeItem
    },
    {
        path: RoutePath.profile,
        text: 'profile',
        Icon: ProfileItem,
        authOnly: true
    },
    {
        path: RoutePath.about,
        text: 'info',
        Icon: AboutItem
    }
]
