import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './AddNewCommentForm.module.scss'
import { useTranslation } from 'react-i18next'
import Input from 'shared/ui/Input/Input'
import { Button } from 'shared/ui'
import { useSelector } from 'react-redux'
import { index } from '../model/selectors/getCommentText'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { addNewCommentActions, addNewCommentReducer } from '../model/slice/addNewCommentSlice'
import { ButtonVariant } from 'shared/ui/Button/Button'
import {
    DynamicModuleLoader,
    type ReducersListType
} from 'shared/lib/components/DynamicModuleLoader'

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

    const commentText = useSelector(index)
    const onCommentTextChange = (value: string) => {
        dispatch(addNewCommentActions.setCommentText(value))
    }
    const onSendHandler = () => {
        onCommentTextChange('')
        onSendComment(commentText)
    }

    return (
        <DynamicModuleLoader reducers={ asyncReducers }>
            <div className={ classNames(s.AddNewCommentForm, {}, [className]) }>
                <Input
                    label={ t('comment') }
                    className={ s.input }
                    value={ commentText }
                    onChange={ onCommentTextChange }
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
