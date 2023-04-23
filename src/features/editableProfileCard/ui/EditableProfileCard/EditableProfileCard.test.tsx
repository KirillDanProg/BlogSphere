import { screen } from '@testing-library/react'
import { EditableProfileCard } from './EditableProfileCard'
import { customComponentRender } from 'shared/lib/tests/customRenderComponent'
import { type ProfileTypePartial } from 'entities/Profile/model/types/profile'
import { type StatusType } from 'app/types/global'
import { profileReducer } from '../../model/slice/profileSlice'
import { type StateSchema } from 'app/providers/StoreProvider'
import { type ReducersListType } from 'shared/lib/components/DynamicModuleLoader'
import userEvent from '@testing-library/user-event'
import { api } from 'shared/api/api'

const profileData: ProfileTypePartial = {
    country: 'Rus',
    age: 22,
    firstName: 'Kirill',
    lastName: 'Doe',
    instagram: 'inst.com',
    avatar: ''
}

const options: { initialState: Partial<StateSchema>, asyncReducers: ReducersListType } = {
    initialState: {
        profile: {
            form: profileData,
            data: profileData,
            error: null,
            status: 'idle' as StatusType,
            readonly: true,
            validationErrors: null
        },
        user: {
            authData: {
                _id: 1,
                userName: 'Kirill',
                email: 'mail.ru',
                token: 'token'
            }
        }
    },
    asyncReducers: {
        profile: profileReducer
    }
}

describe('EditableProfileCard', () => {
    it('render test', () => {
        customComponentRender(<EditableProfileCard/>, options)
        expect(screen.queryByTestId('EDITABLE_PROFILE_CARD.FIRSTNAME'))
            .toBeInTheDocument()
    })

    it('change profile readonly state', async () => {
        customComponentRender(<EditableProfileCard id={ '1' }/>, options)
        expect(screen.queryByTestId('EDITABLE_PROFILE_CARD.EDIT'))
            .toBeInTheDocument()
        await userEvent.click(screen.getByTestId('EDITABLE_PROFILE_CARD.EDIT'))
        expect(screen.queryByTestId('EDITABLE_PROFILE_CARD.CANCEL'))
            .toBeInTheDocument()
    })

    it('cancel all changes after cancel button clicked', async () => {
        customComponentRender(<EditableProfileCard id={ '1' }/>, options)
        await userEvent.click(screen.getByTestId('EDITABLE_PROFILE_CARD.EDIT'))

        await userEvent.clear(screen.getByTestId('EDITABLE_PROFILE_CARD.FIRSTNAME'))
        await userEvent.clear(screen.getByTestId('EDITABLE_PROFILE_CARD.LASTNAME'))

        await userEvent.type(screen.getByTestId('EDITABLE_PROFILE_CARD.FIRSTNAME'), 'Alex')
        await userEvent.type(screen.getByTestId('EDITABLE_PROFILE_CARD.LASTNAME'), 'Bond')

        expect(screen.queryByTestId('EDITABLE_PROFILE_CARD.FIRSTNAME'))
            .toHaveValue('Alex')
        expect(screen.queryByTestId('EDITABLE_PROFILE_CARD.LASTNAME'))
            .toHaveValue('Bond')

        await userEvent.click(screen.getByTestId('EDITABLE_PROFILE_CARD.CANCEL'))

        expect(screen.queryByTestId('EDITABLE_PROFILE_CARD.FIRSTNAME'))
            .toHaveValue('Kirill')
        expect(screen.queryByTestId('EDITABLE_PROFILE_CARD.LASTNAME'))
            .toHaveValue('Doe')
    })

    it('display errors', async () => {
        customComponentRender(<EditableProfileCard id={ '1' }/>, options)
        expect(screen.queryByTestId('EDITABLE_PROFILE_CARD.EDIT'))
            .toBeInTheDocument()
        await userEvent.click(screen.getByTestId('EDITABLE_PROFILE_CARD.EDIT'))

        await userEvent.clear(screen.getByTestId('EDITABLE_PROFILE_CARD.FIRSTNAME'))

        expect(screen.getByTestId('EDITABLE_PROFILE_CARD.SAVE'))
            .toBeInTheDocument()

        await userEvent.click(screen.getByTestId('EDITABLE_PROFILE_CARD.SAVE'))

        expect(screen.queryByTestId('EDITABLE_PROFILE_CARD.ERROR.PARAGRAPH'))
            .toBeInTheDocument()
    })

    it('should send PUT request', async () => {
        const mockPutReq = jest.spyOn(api, 'put')
        customComponentRender(<EditableProfileCard id={ '1' }/>, options)
        await userEvent.click(screen.getByTestId('EDITABLE_PROFILE_CARD.EDIT'))
        await userEvent.type(screen.getByTestId('EDITABLE_PROFILE_CARD.FIRSTNAME'), 'Alex')
        await userEvent.click(screen.getByTestId('EDITABLE_PROFILE_CARD.SAVE'))
        expect(mockPutReq)
            .toHaveBeenCalled()
    })
})
