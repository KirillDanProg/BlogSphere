import { Button, ButtonSize, ButtonVariant } from './Button'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
    title: 'shared/Button',
    component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button { ...args }/>

export const Default = Template.bind({})
Default.args = {
    children: 'default',
    variant: ButtonVariant.DEFAULT
}

export const DefaultDark = Template.bind({})
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]
DefaultDark.args = {
    children: 'default dark',
    variant: ButtonVariant.DEFAULT
}

export const Outlined = Template.bind({})
Outlined.args = {
    children: 'outlined',
    variant: ButtonVariant.OUTLINED
}
export const OutlinedDark = Template.bind({})
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)]
OutlinedDark.args = {
    children: 'outlined dark',
    variant: ButtonVariant.OUTLINED
}

export const PrimaryM = Template.bind({})
PrimaryM.args = {
    children: 'primary',
    variant: ButtonVariant.PRIMARY
}

export const PrimaryL = Template.bind({})
PrimaryL.args = {
    children: 'primary L',
    variant: ButtonVariant.PRIMARY,
    size: ButtonSize.L
}
export const PrimaryXL = Template.bind({})
PrimaryXL.args = {
    children: 'primary XL',
    variant: ButtonVariant.PRIMARY,
    size: ButtonSize.XL
}

export const PrimaryDark = Template.bind({})
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
PrimaryDark.args = {
    children: 'primary dark',
    variant: ButtonVariant.PRIMARY
}
