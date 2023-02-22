import { Loader } from './Loader'
import { type ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
    title: 'shared/Loader',
    component: Loader
}
const Template: ComponentStory<typeof Loader> = () => <Loader/>

export const LightLoader = Template.bind({})
LightLoader.args = {}

export const DarkLoader = Template.bind({})
DarkLoader.decorators = [ThemeDecorator(Theme.DARK)]
DarkLoader.args = {}
