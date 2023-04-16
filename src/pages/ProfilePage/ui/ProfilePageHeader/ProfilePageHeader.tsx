import { type FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'
import { Text } from 'shared/ui/Text/Text'
import { useSelector } from 'react-redux'
import { getProfileReadonly, profileActions, updateUserProfile } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { HStack } from 'shared/ui/Stack/HStack/HStack'

interface ProfilePageHeaderProps {
    className?: string
    isOwner?: boolean
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props) => {
    const { isOwner } = props
    const { t } = useTranslation()

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
            <Text title={ t('profile') }/>
            {
                isOwner && <HStack justify="between" align="center">
                    {
                        !readonly &&
                        <Button
                            variant={ ButtonVariant.INVERTED_OUTLINED }
                            onClick={ onSaveEditHandler }
                        >
                            {t('save')}
                        </Button>
                    }
                    <Button
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
