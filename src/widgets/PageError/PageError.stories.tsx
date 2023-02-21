import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { PageError } from './PageError'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
    title: 'widget/ErrorPage',
    component: PageError
} as ComponentMeta<typeof PageError>

const Template: ComponentStory<typeof PageError> = (args) => <PageError { ...args }/>

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
Dark.args = {}
