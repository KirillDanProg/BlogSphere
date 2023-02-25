import { type ComponentStory } from '@storybook/react'
import Input from 'shared/ui/Input/Input'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
    title: 'shared/Input',
    component: Input
}

const Template: ComponentStory<typeof Input> = (args) => <Input { ...args }/>

export const CustomInput = Template.bind({})
CustomInput.args = {
    label: 'story'
}

export const CustomInputDark = Template.bind({})
CustomInputDark.decorators = [ThemeDecorator(Theme.DARK)]
CustomInputDark.args = {
    label: 'story'
}
