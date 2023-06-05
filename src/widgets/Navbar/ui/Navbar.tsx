import { type FC, memo, useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './Navbar.module.scss'
import { AppLink, Button } from 'shared/ui'
import { ButtonVariant } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/authByUserName'
import { RoutePath } from 'shared/config/routes/routes'
import { AppLinkVariant } from 'shared/ui/AppLink/AppLink'
import { HStack } from 'shared/ui/Stack/HStack/HStack'
import { NotificationsListPopover } from 'features/openNotificationsList'
import { getUserId } from 'entities/User/model/selectors/userSelectors'
import { useSelector } from 'react-redux'
import { AvatarDropdown } from 'features/avatarDropdown'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = memo((props) => {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
    const { t } = useTranslation('auth')
    const isAuth = useSelector(getUserId)
    const onCloseHandler = useCallback(() => {
        setIsAuthModalOpen(false)
    }, [])

    const onOpenHandler = useCallback(() => {
        setIsAuthModalOpen(true)
    }, [setIsAuthModalOpen])

    return (
        <HStack align="center" className={ classNames(s.Navbar) }>
            <div className={ classNames(s.links) }>
                {
                    isAuth
                        ? <HStack max justify="between" align="center" gap="8">
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
                            <NotificationsListPopover/>
                            <AvatarDropdown openModalHandler={ onOpenHandler }/>
                        </HStack>
                        : <Button
                            variant={ ButtonVariant.INVERTED }
                            onClick={ onOpenHandler }
                        >
                            {t('Войти')}
                        </Button>
                }
            </div>
            <LoginModal
                isOpen={ isAuthModalOpen }
                onClose={ onCloseHandler }
            />
        </HStack>
    )
})
