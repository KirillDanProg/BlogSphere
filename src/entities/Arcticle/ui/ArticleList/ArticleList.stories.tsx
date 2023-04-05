import { type ComponentStory } from '@storybook/react'
import { ArticlesList } from 'entities/Arcticle/ui/ArticleList/ArticlesList'

export default {
    title: '',
    component: ArticlesList
}

const Template: ComponentStory<typeof ArticlesList> = (args) => <ArticlesList { ...args }/>

export const Light = Template.bind({})
Light.args = {}
