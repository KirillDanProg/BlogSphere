import { useTranslation } from 'react-i18next'

const MainPage = () => {
    const { t } = useTranslation('main')
    return (
        <div className={ 'qwerqwr' } >
            {t('title')}
        </div>
    )
}
export default MainPage
