import { useTranslation } from 'react-i18next'
import { Page } from 'widgets/Page/ui/Page'

const MainPage = () => {
    const { t } = useTranslation('main')
    return (
        <Page className={ 'qwerqwr' }>
            {t('title')}
        </Page>
    )
}
export default MainPage
