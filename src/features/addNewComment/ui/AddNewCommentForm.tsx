import React, { type FC, type KeyboardEvent, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './AddNewCommentForm.module.scss'
import { useTranslation } from 'react-i18next'
import Input from 'shared/ui/Input/Input'
import { Button } from 'shared/ui'
import {
    DynamicModuleLoader,
    type ReducersListType
} from 'shared/lib/components/DynamicModuleLoader'
import { useSelector } from 'react-redux'
import { getCommentText } from '../model/selectors'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { addNewCommentActions, addNewCommentReducer } from '../model/slice/addNewCommentSlice'
import { ButtonVariant } from 'shared/ui/Button/Button'

interface AddNewCommentFormProps {
    className?: string
    onSendComment: (value: string) => void
}

const asyncReducers: ReducersListType = {
    addNewComment: addNewCommentReducer
}
const AddNewCommentForm: FC<AddNewCommentFormProps> = (props) => {
    const {
        className,
        onSendComment
    } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    const commentText = useSelector(getCommentText)
    const onCommentTextChange = (value: string) => {
        dispatch(addNewCommentActions.setCommentText(value))
    }
    const sendComment = () => {
        onCommentTextChange('')
        onSendComment(commentText)
    }
    const onSendHandler = () => {
        sendComment()
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            sendComment()
        }
    }

    return (
        <DynamicModuleLoader reducers={ asyncReducers }>
            <div className={ classNames(s.AddNewCommentForm, {}, [className]) }>
                <Input
                    label={ t('comment') }
                    className={ s.input }
                    value={ commentText }
                    onChange={ onCommentTextChange }
                    onKeyDown={ onKeyDownHandler }
                />
                <Button
                    onClick={ onSendHandler }
                    variant={ ButtonVariant.PRIMARY }>
                    {t('send')}
                </Button>
            </div>
        </DynamicModuleLoader>
    )
}

export default memo(AddNewCommentForm)
