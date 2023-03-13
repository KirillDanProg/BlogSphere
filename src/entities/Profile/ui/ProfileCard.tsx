import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Text, TextVariant } from 'shared/ui/Text/Text'
import Input from 'shared/ui/Input/Input'
import { type StatusType } from 'app/types/global'
import { Loader } from 'shared/ui/Loader/Loader'
import { type ProfileTypePartial } from 'entities/Profile/model/types/profile'

type onChangeHandlerType = (value: string) => void

interface ProfileCardProps {
    className?: string
    profileData?: ProfileTypePartial | null
    profileError?: string | null
    profileStatus?: StatusType
    readonly?: boolean
    onFirstNameChange?: onChangeHandlerType
    onLastNameChange?: onChangeHandlerType
    onAgeChange?: onChangeHandlerType
    onCountryChange?: onChangeHandlerType
    onInstagramChange?: onChangeHandlerType
    onAvatarChange?: (value: File) => void
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const { t } = useTranslation('profile')
    const {
        className,
        profileData,
        profileError,
        profileStatus,
        readonly,
        onFirstNameChange,
        onLastNameChange,
        onAgeChange,
        onCountryChange,
        onInstagramChange,
        onAvatarChange
    } = props

    if (profileStatus === 'loading') {
        return <div className={ classNames(s.ProfileCard, {}, [className, s.loading]) }>
            <Loader/>
        </div>
    }

    if (profileError) {
        return <div className={ classNames(s.ProfileCard, {}, [className, s.error]) }>
            <Text align={ 'center' }
                variant={ TextVariant.ERROR }
                title={ t('errorTitle') }/>
            <Text align={ 'center' }
                variant={ TextVariant.ERROR }
                text={ t('errorMsg') }/>
        </div>
    }

    return (
        <div className={ classNames(s.ProfileCard, {}, [className]) }>
            <Input
                className={ s.input }
                readonly={ readonly }
                label={ 'FirstName' }
                name="firstName"
                value={ profileData?.firstName }
                onChange={ onFirstNameChange }
            />
            <Input
                className={ s.input }
                readonly={ readonly }
                label={ 'LastName' }
                name="lastName"
                value={ profileData?.lastName }
                onChange={ onLastNameChange }
            />
            <Input
                className={ s.input }
                readonly={ readonly }
                label={ 'Your age' }
                name="age"
                value={ profileData?.age }
                onChange={ onAgeChange }
            />
            <Input
                className={ s.input }
                readonly={ readonly }
                label={ 'Country' }
                name="country"
                value={ profileData?.country }
                onChange={ onCountryChange }
            />
            <Input
                className={ s.input }
                readonly={ readonly }
                label={ 'Instagram' }
                name="instagram"
                value={ profileData?.instagram }
                onChange={ onInstagramChange }
            />
            <Input
                className={ s.input }
                type={ 'file' }
                label={ 'Avatar' }
                name="avatar"
                onFileInputChange={ onAvatarChange }
            />
        </div>
    )
}
