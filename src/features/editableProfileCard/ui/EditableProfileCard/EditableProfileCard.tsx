import { useTranslation } from 'react-i18next'
import { type ChangeEvent, memo } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import defaultUserPhoto from 'shared/assets/images/defaultUserAvatar.jpg'
import { useSelector } from 'react-redux'
import { HStack } from 'shared/ui/Stack/HStack/HStack'
import s from 'pages/ProfilePage/ui/ProfilePage.module.scss'
import { VStack } from 'shared/ui/Stack/VStack/VStack'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Button } from 'shared/ui'
import { ButtonVariant } from 'shared/ui/Button/Button'
import Upload from 'shared/assets/icons/uploadAvatar.svg'
import { Text, TextVariant } from 'shared/ui/Text/Text'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm'
import { getValidationErrors } from '../../model/selectors/getValidationErrors/getValidationErrors'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { profileActions, profileReducer } from '../../model/slice/profileSlice'
import { ProfileCard } from 'entities/Profile'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { getProfileStatus } from '../../model/selectors/getProfileStatus/getProfileStatus'
import { fetchUserProfile } from '../../model/services/fetchUserProfile/fetchUserProfile'
import { uploadAvatarProfile } from '../../model/services/uploadAvatarProfile/uploadAvatarProfile'
import {
    DynamicModuleLoader,
    type ReducersListType
} from 'shared/lib/components/DynamicModuleLoader'
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfilCardHeader'

interface EditableProfileCardProps {
    className?: string
    id?: string
}

const initialReducers: ReducersListType = {
    profile: profileReducer
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const {
        id
    } = props
    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()
    const profileData = useSelector(getProfileForm)
    const status = useSelector(getProfileStatus)
    const error = useSelector(getProfileError)
    const readonly = useSelector(getProfileReadonly)
    const validationErrors = useSelector(getValidationErrors)
    const userAvatar = profileData?.avatar ? profileData?.avatar : defaultUserPhoto

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

    useInitialEffect(() => {
        void dispatch(fetchUserProfile(id))
    })

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
    return (
        <DynamicModuleLoader reducers={ initialReducers } removeAfterUnmount={ false }>
            <EditableProfileCardHeader/>
            {errors}
            <HStack gap="32" className={ s.profileWrapper }>
                <VStack align="center" justify="center">
                    <Avatar
                        size={ 200 }
                        src={ userAvatar }
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
                            {t('avatar')}
                        </label>
                    </Button>
                </VStack>
                <ProfileCard
                    onFirstNameChange={ onFirstNameChangeHandler }
                    onLastNameChange={ onLastNameChangeHandler }
                    onAgeChange={ onAgeChangeHandler }
                    onCountryChange={ onCountryChangeHandler }
                    onInstagramChange={ onInstagramChangeHandler }
                    readonly={ readonly }
                    profileData={ profileData }
                    profileStatus={ status }
                    profileError={ error }
                />
            </HStack>
        </DynamicModuleLoader>
    )
})
