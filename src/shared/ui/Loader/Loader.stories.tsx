import { Loader } from './Loader'
import { type StoryFn } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
    title: 'shared/Loader',
    component: Loader
}
const Template: StoryFn<typeof Loader> = () => <Loader/>

export const LightLoader = Template.bind({})
LightLoader.args = {}

export const DarkLoader = Template.bind({})
DarkLoader.decorators = [ThemeDecorator(Theme.DARK)]
DarkLoader.args = {}
