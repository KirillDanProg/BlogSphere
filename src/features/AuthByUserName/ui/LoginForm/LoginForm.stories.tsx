import { type ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { LoginForm } from '../LoginForm/LoginForm'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'

export default {
    title: 'features/LoginForm',
    component: LoginForm
}
const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm { ...args }/>

export const LightLoginForm = Template.bind({})
LightLoginForm.decorators = [StoreDecorator({
    auth: {
        email: 'test@mail.ru',
        password: 'qwerqwer'
    }
})]
LightLoginForm.args = {}

export const DarkLoginForm = Template.bind({})
DarkLoginForm.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    auth: {
        email: 'test@mail.ru',
        password: 'qwerqwer'
    }
})]
DarkLoginForm.args = {}
