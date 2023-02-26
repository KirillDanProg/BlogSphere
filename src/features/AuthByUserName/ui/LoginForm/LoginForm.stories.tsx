import { type ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { LoginForm } from 'features/AuthByUserName'

export default {
    title: 'features/LoginForm',
    component: LoginForm
}

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm { ...args }/>

export const LightLoginForm = Template.bind({})
LightLoginForm.args = {}

export const DarkLoginForm = Template.bind({})
DarkLoginForm.decorators = [ThemeDecorator(Theme.DARK)]
DarkLoginForm.args = {}
