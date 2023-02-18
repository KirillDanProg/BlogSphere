import { type StoryFn } from '@storybook/react'
import { Navbar } from 'widgets/Navbar'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'

export default {
    title: 'widget/Navbar',
    component: Navbar
}

const Template: StoryFn<typeof Navbar> = (args) => <Navbar { ...args }/>

export const LightNavbar = Template.bind({})
LightNavbar.args = {}

export const DarkNavbar = Template.bind({})
DarkNavbar.decorators = [ThemeDecorator(Theme.DARK)]
DarkNavbar.args = {}
