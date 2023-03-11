import {
    DynamicModuleLoader,
    type ReducersListType
} from 'shared/lib/components/DynamicModuleLoader'
import { profileReducer } from 'entities/Profile'
import { useEffect } from 'react'
import {
    fetchUserProfile
} from 'entities/Profile/model/services/fetchUserProfile/fetchUserProfile'
import { ProfileCard } from 'entities/Profile/ui/ProfileCard'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

const initialReducers: ReducersListType = {
    profile: profileReducer
}
const ProfilePage = () => {
    // const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()
    useEffect(() => {
        void dispatch(fetchUserProfile(''))
    }, [dispatch])
    return (
        <DynamicModuleLoader reducers={ initialReducers }>
            <ProfileCard/>
        </DynamicModuleLoader>
    )
}
export default ProfilePage
