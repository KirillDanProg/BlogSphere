import { type FC, memo, useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './Navbar.module.scss'
import { AppLink, Button } from 'shared/ui'
import { ButtonVariant } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/authByUserName'
import { useDispatch, useSelector } from 'react-redux'
import { getUserId } from 'entities/User/model/selectors/userSelectors'
import { deleteAuthUserDataThunk } from 'entities/User/model/slice/userSlice'
import { RoutePath } from 'shared/config/routes/routes'
import { AppLinkVariant } from 'shared/ui/AppLink/AppLink'
import { Dropdown } from 'shared/ui/Dropdown/Dropdown'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { getProfileData } from 'entities/Profile'
import defaultAvatar from 'shared/assets/images/defaultUserAvatar.jpg'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = memo((props) => {
    const [isAuthModalOpen, setIsAuthModal] = useState(false)
    const { t } = useTranslation('auth')
    const userData = useSelector(getProfileData)
    const isAuth = useSelector(getUserId)
    const dispatch = useDispatch()

    const onCloseHandler = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const signOutHandler = useCallback(() => {
        if (isAuth) {
            dispatch(deleteAuthUserDataThunk())
        }
    }, [isAuth, dispatch])

    return (
        <div className={ classNames(s.Navbar) }>
            <div className={ classNames(s.links) }>
                <Dropdown
                    direction="bottom right"
                    className={ s.authBtn }
                    trigger={ <Avatar
                        size={ 40 }
                        src={ userData?.avatar ?? defaultAvatar }/> }
                    items={ [
                        {
                            onClick: signOutHandler,
                            content: 'Logout'
                        }
                    ] }
                />
                {/* <Button */}
                {/*     */}
                {/*     variant={ ButtonVariant.INVERTED } */}
                {/*     onClick={ isAuth */}
                {/*         ? signOutHandler */}
                {/*         : onOpenHandler */}
                {/*     } */}
                {/* > */}
                {/*     { */}
                {/*         isAuth */}
                {/*             ? t('signout') */}
                {/*             : t('signin') */}

                {/*     } */}

                {/* </Button> */}
                <AppLink
                    variant={ AppLinkVariant.DEFAULT }
                    to={ RoutePath.article_create_page }
                    className={ s.linkToEditPage }>
                    <Button
                        className={ s.createPostBtn }
                        variant={ ButtonVariant.NO_HOVER }
                    >
                        {t('create-post')}
                    </Button>
                </AppLink>
            </div>
            <LoginModal
                isOpen={ isAuthModalOpen }
                onClose={ onCloseHandler }
            />
        </div>
    )
})
