import {
    DynamicModuleLoader,
    type ReducersListType
} from 'shared/lib/components/DynamicModuleLoader'
import {
    fetchUserProfile,
    getProfileError,
    getProfileReadonly,
    getProfileStatus,
    profileActions,
    profileReducer,
    uploadAvatarProfile
} from 'entities/Profile'
import { useEffect } from 'react'
import { ProfileCard } from 'entities/Profile/ui/ProfileCard'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import s from './ProfilePage.module.scss'
import { Wrapper } from 'shared/ui/Wrapper/Wrapper'

const initialReducers: ReducersListType = {
    profile: profileReducer
}
const ProfilePage = () => {
    // const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()
    const profileForm = useSelector(getProfileForm)
    const status = useSelector(getProfileStatus)
    const error = useSelector(getProfileError)
    const readonly = useSelector(getProfileReadonly)

    const onFirstNameChangeHandler = (value: string) => {
        dispatch(profileActions.updateProfileForm({ firstName: value }))
    }
    const onLastNameChangeHandler = (value: string) => {
        dispatch(profileActions.updateProfileForm({ lastName: value }))
    }
    const onAgeChangeHandler = (value: string) => {
        dispatch(profileActions.updateProfileForm({ age: +value }))
    }
    const onCountryChangeHandler = (value: string) => {
        dispatch(profileActions.updateProfileForm({ country: value }))
    }
    const onInstagramChangeHandler = (value: string) => {
        dispatch(profileActions.updateProfileForm({ instagram: value }))
    }
    const onAvatarChangeHandler = (file: File) => {
        void dispatch(uploadAvatarProfile(file))
    }

    useEffect(() => {
        void dispatch(fetchUserProfile(''))
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={ initialReducers }>
            <ProfilePageHeader/>
            <div className={ s.profileWrapper }>
                <Wrapper>
                    <Avatar
                        size={ 200 }
                        src={ `http://localhost:4444${profileForm?.avatar}` }
                    />
                </Wrapper>
                <Wrapper>
                    <ProfileCard
                        onFirstNameChange={ onFirstNameChangeHandler }
                        onLastNameChange={ onLastNameChangeHandler }
                        onAgeChange={ onAgeChangeHandler }
                        onCountryChange={ onCountryChangeHandler }
                        onInstagramChange={ onInstagramChangeHandler }
                        onAvatarChange={ onAvatarChangeHandler }
                        readonly={ readonly }
                        profileData={ profileForm }
                        profileStatus={ status }
                        profileError={ error }
                    />
                </Wrapper>

            </div>

        </DynamicModuleLoader>
    )
}
export default ProfilePage
