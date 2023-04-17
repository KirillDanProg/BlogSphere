import { type FC, memo } from 'react'
import { Button } from '../Button/Button'
import { useTranslation } from 'react-i18next'
import ruIcon from 'shared/assets/icons/langIcons/icons8-russian-federation-48.png'
import engIcon from 'shared/assets/icons/langIcons/icons8-great-britain-48.png'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = memo((props) => {
    const { className } = props
    const { i18n } = useTranslation()
    const { t } = useTranslation()
    const toggleLanguage = () => {
        void i18n.changeLanguage(i18n.language === 'ru' ? 'eng' : 'ru')
    }
    return (
        <Button onClick={ toggleLanguage } className={ className }>
            {
                i18n.language === 'ru'
                    ? <img alt={ t('russian') } src={ ruIcon }/>
                    : <img alt={ t('english') } src={ engIcon }/>
            }
        </Button>
    )
})
