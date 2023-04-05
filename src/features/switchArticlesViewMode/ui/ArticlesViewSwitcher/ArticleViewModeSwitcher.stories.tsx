import { type ComponentStory } from '@storybook/react'
import { ArticlesViewModeSwitcher } from './ArticlesViewModeSwitcher'

export default {
    title: 'features/ArticlesViewModeSwitcher',
    component: ArticlesViewModeSwitcher
}

const Template: ComponentStory<typeof ArticlesViewModeSwitcher> = (args) =>
    <ArticlesViewModeSwitcher { ...args }/>

export const Light = Template.bind({})
Light.args = {}
