import { type FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'
import { Text } from 'shared/ui/Text/Text'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { HStack } from 'shared/ui/Stack/HStack/HStack'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { profileActions } from '../../model/slice/profileSlice'
import { updateUserProfile } from '../../model/services/udateUserProfile/updateUserProfile'
import { getUserId } from 'entities/User/model/selectors/userSelectors'

interface ProfilePageHeaderProps {
    className?: string
    id?: string
}

export const EditableProfileCardHeader: FC<ProfilePageHeaderProps> = (props) => {
    const {
        id
    } = props
    const { t } = useTranslation()
    const authUserId = useSelector(getUserId)
    const isOwner = id === String(authUserId)
    const readonly = useSelector(getProfileReadonly)

    const dispatch = useAppDispatch()

    const onEditHandler = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCancelEditHandler = useCallback(() => {
        dispatch(profileActions.cancelEditForm())
    }, [dispatch])

    const onSaveEditHandler = useCallback(() => {
        void dispatch(updateUserProfile(''))
    }, [dispatch])

    return (
        <HStack gap="32" justify="between" align="center">
            <Text title={t('profile')} />
            {
                isOwner &&
                <HStack justify="between" align="center" gap="8">
                    {
                        !readonly &&
                        <Button
                            data-testid={'EDITABLE_PROFILE_CARD.SAVE'}
                            variant={ButtonVariant.INVERTED_OUTLINED}
                            onClick={onSaveEditHandler}
                        >
                            {t('save')}
                        </Button>
                    }
                    <Button
                        data-testid={
                            readonly
                                ? 'EDITABLE_PROFILE_CARD.EDIT'
                                : 'EDITABLE_PROFILE_CARD.CANCEL'
                        }
                        onClick={
                            readonly
                                ? onEditHandler
                                : onCancelEditHandler
                        }
                        variant={
                            readonly
                                ? ButtonVariant.INVERTED_OUTLINED
                                : ButtonVariant.RED

                        }
                    >
                        {
                            readonly
                                ? t('edit')
                                : t('cancel')
                        }
                    </Button>
                </HStack>
            }
        </HStack>
    )
}
