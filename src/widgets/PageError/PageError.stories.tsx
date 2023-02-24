import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { PageError } from './PageError'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const Story: ComponentMeta<typeof PageError> = {
    title: 'widget/ErrorPage',
    component: PageError
}
export default Story

const Template: ComponentStory<typeof PageError> = (args) => <PageError { ...args }/>

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
Dark.args = {}
