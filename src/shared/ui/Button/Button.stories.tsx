import { Button, ButtonVariant } from './Button'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

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

export const Outlined = Template.bind({})
Outlined.args = {
    children: 'outlined',
    variant: ButtonVariant.OUTLINED
}

export const Primary = Template.bind({})
Primary.args = {
    children: 'primary',
    variant: ButtonVariant.PRIMARY
}
