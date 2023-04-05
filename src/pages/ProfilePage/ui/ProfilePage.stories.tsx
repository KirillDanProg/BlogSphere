import { type ComponentStory } from '@storybook/react'
import ProfilePage from '../ui/ProfilePage'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { ValidateProfileErrors } from 'entities/Profile/model/types/profile'

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage
}
const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage/>
export const Light = Template.bind({})
Light.decorators = [StoreDecorator({
    profile: {
        readonly: true,
        form: {
            lastName: 'Vychuzhanin',
            firstName: 'Kirill',
            age: 24,
            instagram: 'instagram.com',
            country: 'Russia'
        },
        status: 'succeeded',
        error: null
    }
})]
Light.args = {}

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        readonly: true,
        form: {
            lastName: 'Vychuzhanin',
            firstName: 'Kirill',
            age: 24,
            instagram: 'instagram.com',
            country: 'Russia'
        },
        status: 'succeeded',
        error: null
    }
})]
Dark.args = {}

export const EditMode = Template.bind({})
EditMode.decorators = [StoreDecorator({
    profile: {
        readonly: false,
        form: {
            lastName: 'Vychuzhanin',
            firstName: 'Kirill',
            age: 24,
            instagram: 'instagram.com',
            country: 'Russia'
        }
    }
})]
EditMode.args = {}

export const WithValidationErrors = Template.bind({})
WithValidationErrors.decorators = [StoreDecorator({
    profile: {
        readonly: true,
        validationErrors: [
            ValidateProfileErrors.INCORRECT_FIRSTNAME,
            ValidateProfileErrors.INCORRECT_LASTNAME,
            ValidateProfileErrors.INCORRECT_AGE,
            ValidateProfileErrors.INCORRECT_COUNTRY
        ]
    }
})]
WithValidationErrors.args = {}

export const ServerError = Template.bind({})
ServerError.decorators = [StoreDecorator({
    profile: {
        readonly: true,
        error: 'error'
    }
})]
ServerError.args = {}
