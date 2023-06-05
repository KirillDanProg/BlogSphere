import { type FC, useCallback, useMemo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './AvatarDropdown.module.scss'
import { Dropdown } from 'shared/ui/Popups'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import defaultAvatar from 'shared/assets/images/defaultUserAvatar.jpg'
import { RoutePath } from 'shared/config/routes/routes'
import { useTranslation } from 'react-i18next'
import {
    getProfileData
} from 'features/editableProfileCard/model/selectors/getProfileData/getProfileData'
import { deleteAuthUserDataThunk } from 'entities/User/model/slice/userSlice'
import { getUserAuthData } from 'entities/User/model/selectors/userSelectors'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useSelector } from 'react-redux'

interface AvatarDropdownProps {
    className?: string
    openModalHandler: () => void
}

export const AvatarDropdown: FC<AvatarDropdownProps> = (props) => {
    const { t } = useTranslation('auth')
    const authData = useSelector(getUserAuthData)
    const dispatch = useAppDispatch()
    const userId = String(authData?._id)
    const userData = useSelector(getProfileData)

    const signOutHandler = useCallback(() => {
        if (userId) {
            void dispatch(deleteAuthUserDataThunk())
        }
    }, [userId, dispatch])

    const dropdownItems = useMemo(() => {
        return [
            {
                href: RoutePath.profile + userId,
                content: 'Profile'
            },
            {
                onClick: signOutHandler,
                content: t('signout')
            }
        ]
    }, [signOutHandler, userId, t])

    return (
        <Dropdown
            direction="bottom right"
            className={ classNames(s.AvatarDropdown, {}, [s.authBtn]) }
            trigger={ <Avatar circle size={ 40 } src={ userData?.avatar ?? defaultAvatar }/> }
            items={ dropdownItems }
        />
    )
}
