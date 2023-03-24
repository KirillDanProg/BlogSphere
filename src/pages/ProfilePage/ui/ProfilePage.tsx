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
import { type ChangeEvent, useEffect } from 'react'
import { ProfileCard } from 'entities/Profile/ui/ProfileCard'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import s from './ProfilePage.module.scss'
import { Wrapper } from 'shared/ui/Wrapper/Wrapper'
import {
    getValidationErrors
} from 'entities/Profile/model/selectors/getValidationErrors/getValidationErrors'
import { Text, TextVariant } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import Upload from 'shared/assets/icons/uploadAvatar.svg'
import { Button } from 'shared/ui'
import { ButtonVariant } from 'shared/ui/Button/Button'
import defaultUserPhoto from 'shared/assets/images/defaultUserAvatar.jpg'
import { useParams } from 'react-router-dom'

const initialReducers: ReducersListType = {
    profile: profileReducer
}
const ProfilePage = () => {
    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()
    const profileForm = useSelector(getProfileForm)
    const status = useSelector(getProfileStatus)
    const error = useSelector(getProfileError)
    const readonly = useSelector(getProfileReadonly)
    const validationErrors = useSelector(getValidationErrors)
    const { id } = useParams()
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
    const onAvatarChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            void dispatch(uploadAvatarProfile(e.target.files[0]))
        }
    }

    const errorsConvertedForUser = {
        INCORRECT_COUNTRY: t('error-country'),
        INCORRECT_AGE: t('error-age'),
        INCORRECT_FIRSTNAME: t('error-firstName'),
        INCORRECT_LASTNAME: t('error-lastName'),
        INCORRECT_INSTAGRAM: t('error-instagram'),
        SERVER_ERROR: t('error-server'),
        NO_DATA: t('error-no-data')
    }

    const errors = validationErrors.map(error => {
        return <Text
            key={ error }
            text={ errorsConvertedForUser[error] }
            variant={ TextVariant.ERROR }/>
    })

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            void dispatch(fetchUserProfile(id))
        }
    }, [dispatch, id])

    return (
        <DynamicModuleLoader reducers={ initialReducers }>
            <div className={ s.container }>
                <ProfilePageHeader/>
                {errors}
                <div className={ s.profileWrapper }>
                    <div className={ s.profileAvatar }>
                        <Avatar
                            size={ 200 }
                            src={ profileForm?.avatar
                                ? `http://localhost:4444${profileForm?.avatar}`
                                : defaultUserPhoto
                            }
                        />
                        <input onChange={ onAvatarChangeHandler } type="file" id="upload-file"
                            hidden/>
                        <Button
                            className={ s.avatarBtn }
                            variant={ ButtonVariant.INVERTED_OUTLINED }>
                            <label
                                className={ s.label }
                                htmlFor="upload-file">
                                <Upload
                                    className={ s.avatarIcon }
                                    width={ '15px' }
                                />
                                {t('avatar')}</label>
                        </Button>
                    </div>
                    <Wrapper>
                        <ProfileCard
                            onFirstNameChange={ onFirstNameChangeHandler }
                            onLastNameChange={ onLastNameChangeHandler }
                            onAgeChange={ onAgeChangeHandler }
                            onCountryChange={ onCountryChangeHandler }
                            onInstagramChange={ onInstagramChangeHandler }
                            readonly={ readonly }
                            profileData={ profileForm }
                            profileStatus={ status }
                            profileError={ error }
                        />
                    </Wrapper>
                </div>
            </div>
        </DynamicModuleLoader>
    )
}
export default ProfilePage
