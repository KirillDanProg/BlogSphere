import { type FC, memo, useCallback, useMemo, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './Navbar.module.scss'
import { AppLink, Button } from 'shared/ui'
import { ButtonVariant } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/authByUserName'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User/model/selectors/userSelectors'
import { deleteAuthUserDataThunk } from 'entities/User/model/slice/userSlice'
import { RoutePath } from 'shared/config/routes/routes'
import { AppLinkVariant } from 'shared/ui/AppLink/AppLink'
import { Dropdown } from 'shared/ui/Dropdown/Dropdown'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import defaultAvatar from 'shared/assets/images/defaultUserAvatar.jpg'
import { HStack } from 'shared/ui/Stack/HStack/HStack'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = memo((props) => {
    const [isAuthModalOpen, setIsAuthModal] = useState(false)
    const { t } = useTranslation('auth')
    const authData = useSelector(getUserAuthData)
    const dispatch = useAppDispatch()
    const userId = String(authData?._id)

    const onOpenHandler = useCallback(() => {
        setIsAuthModal(true)
    }, [])
    const onCloseHandler = useCallback(() => {
        setIsAuthModal(false)
    }, [])

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
                onClick: authData ? signOutHandler : onOpenHandler,
                content: authData ? t('signout') : t('signin')
            }
        ]
    }, [authData, signOutHandler, onOpenHandler, userId, t])

    return (
        <HStack align="center" className={classNames(s.Navbar)}>
            <div className={classNames(s.links)}>
                <Dropdown
                    direction="bottom right"
                    className={s.authBtn}
                    trigger={<Avatar circle size={40} src={authData?.avatar ?? defaultAvatar} />}
                    items={dropdownItems}
                />
                <AppLink
                    variant={AppLinkVariant.DEFAULT}
                    to={RoutePath.article_create_page}
                    className={s.linkToEditPage}>
                    <Button
                        className={s.createPostBtn}
                        variant={ButtonVariant.NO_HOVER}
                    >
                        {t('create-post')}
                    </Button>
                </AppLink>
            </div>
            <LoginModal
                isOpen={isAuthModalOpen}
                onClose={onCloseHandler}
            />
        </HStack>
    )
})
