import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { getProfileData } from '../model/selectors/getProfileData/getProfileData'
import { useDispatch, useSelector } from 'react-redux'
import { Text } from 'shared/ui/Text/Text'
import { Button } from 'shared/ui'
import Input from 'shared/ui/Input/Input'
import { ButtonVariant } from 'shared/ui/Button/Button'
import {
    updateUserProfile
} from 'entities/Profile/model/services/udateUserProfile/updateUserProfile'

interface ProfileCardProps {
    className?: string
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const { t } = useTranslation('profile')
    const { className } = props
    const dispatch = useDispatch()

    const profileData = useSelector(getProfileData)
    const handleSubmit = (e: any) => {
        e.preventDefault()

        const model = {
            firstName: e.currentTarget.elements.firstName.value,
            lastName: e.currentTarget.elements.lastName.value
        }
        dispatch(updateUserProfile(model))
    }

    return (
        <div className={ classNames(s.ProfileCard, {}, [className]) }>
            <form onSubmit={ handleSubmit }
                className={ s.data }>
                <div className={ s.header }>
                    < Text title={ t('profile') }/>
                    <Button variant={ ButtonVariant.PRIMARY }
                        type="submit"
                    >
                        {t('edit')}
                    </Button>
                </div>

                <Input
                    label={ 'FirstName' }
                    name="firstName"
                    value={ profileData?.firstName }

                />
                <Input
                    label={ 'LastName' }
                    name="lastName"
                    value={ profileData?.lastName }
                />
            </form>
        </div>
    )
}
