import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, type ReducersListType } from 'shared/lib/components/DynamicModuleLoader'
import { profileReducer } from 'entities/Profile'

const initialReducers: ReducersListType = {
    profile: profileReducer
}
const ProfilePage = () => {
    const { t } = useTranslation('profile')
    return (
        <DynamicModuleLoader removeAfterUnmount reducers={ initialReducers }>
            <div className={ 'qwerqwr' }>
                {t('title')}
            </div>
        </DynamicModuleLoader>

    )
}
export default ProfilePage
