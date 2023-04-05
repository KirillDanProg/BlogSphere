import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from 'entities/User/model/selectors/userSelectors'
import { type SidebarItemType } from '../types/sidebarItems'
import { RoutePath } from 'shared/config/routes/routes'
import HomeItem from 'shared/assets/icons/menu-icons/house-solid.svg'
import AboutItem from 'shared/assets/icons/menu-icons/circle-question-regular.svg'
import ProfileItem from 'shared/assets/icons/menu-icons/user-solid.svg'
import ArticlesItem from 'shared/assets/icons/menu-icons/newspaper-regular.svg'

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: RoutePath.main,
                text: 'main',
                Icon: HomeItem
            },
            {
                path: RoutePath.about,
                text: 'info',
                Icon: AboutItem
            }
        ]
        if (userData) {
            sidebarItemsList.push({
                path: RoutePath.profile + String(userData._id),
                text: 'profile',
                Icon: ProfileItem,
                authOnly: true
            },
            {
                path: RoutePath.articles,
                text: 'articles',
                Icon: ArticlesItem,
                authOnly: true
            })
        }
        return sidebarItemsList
    }
)
