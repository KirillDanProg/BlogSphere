import { type ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import LoginForm from '../LoginForm/LoginForm'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'

export default {
    title: 'features/LoginForm',
    component: LoginForm
}
const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm { ...args }/>

export const Light = Template.bind({})
Light.decorators = [StoreDecorator({
    auth: {
        email: 'test@mail.ru',
        password: 'qwerqwer'
    }
})]
Light.args = {}

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    auth: {
        email: 'test@mail.ru',
        password: 'qwerqwer'
    }
})]
Dark.args = {}

export const withError = Template.bind({})
withError.decorators = [StoreDecorator({
    auth: {
        email: 'test@mail.ru',
        password: 'qwerqwer',
        error: 'error'
    }
})]
withError.args = {}
