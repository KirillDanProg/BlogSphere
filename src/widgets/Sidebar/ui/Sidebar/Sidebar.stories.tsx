import { Sidebar } from 'widgets/Sidebar'
import { type StoryFn } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
    title: 'widget/Sidebar',
    component: Sidebar
}
const Template: StoryFn<typeof Sidebar> = (args) => <Sidebar { ...args }/>

export const LightSidebar = Template.bind({})
LightSidebar.args = {}

export const DarkSidebar = Template.bind({})
DarkSidebar.args = {}
DarkSidebar.decorators = [ThemeDecorator(Theme.DARK)]
