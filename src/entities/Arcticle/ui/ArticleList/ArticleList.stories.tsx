import { type ComponentStory } from '@storybook/react'
import { ArticlesList } from './ArticlesList'

export default {
    title: '',
    component: ArticlesList
}

const Template: ComponentStory<typeof ArticlesList> = (args) => <ArticlesList { ...args }/>

export const Light = Template.bind({})
Light.args = {}
