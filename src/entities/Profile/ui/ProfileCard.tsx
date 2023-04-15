import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Text, TextVariant } from 'shared/ui/Text/Text'
import Input from 'shared/ui/Input/Input'
import { type StatusType } from 'app/types/global'
import { Loader } from 'shared/ui/Loader/Loader'
import { type ProfileTypePartial } from '../model/types/profile'

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
        onInstagramChange
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
                label={ t('FirstName') }
                name="firstName"
                value={ profileData?.firstName }
                onChange={ onFirstNameChange }
            />
            <Input
                className={ s.input }
                readonly={ readonly }
                label={ t('LastName') }
                name="lastName"
                value={ profileData?.lastName }
                onChange={ onLastNameChange }
            />
            <Input
                className={ s.input }
                readonly={ readonly }
                label={ t('age') }
                name="age"
                value={ profileData?.age }
                onChange={ onAgeChange }
            />
            <Input
                className={ s.input }
                readonly={ readonly }
                label={ t('Country') }
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
        </div>
    )
}
