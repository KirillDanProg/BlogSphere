import { type FC, useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './Navbar.module.scss'
import { Button } from 'shared/ui'
import { Modal } from 'shared/ui/Modal/Modal'
import { ButtonVariant } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
    const [isAuthModalOpen, setIsAuthModal] = useState(false)
    const { t } = useTranslation()

    const toggleAuthModal = useCallback(() => {
        setIsAuthModal(prev => !prev)
    }, [])

    return (
        <div className={ classNames(s.Navbar) }>
            <div className={ classNames(s.links) }>
                <Button
                    variant={ ButtonVariant.INVERTED }
                    onClick={ toggleAuthModal }
                >
                    {t('login')}
                </Button>
            </div>

            <Modal
                isOpen={ isAuthModalOpen }
                onClose={ toggleAuthModal }
            >
                loremdfasndf ewfwqe rwr qwerq wer
            </Modal>
        </div>
    )
}
