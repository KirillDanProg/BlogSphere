import { type ComponentStory } from '@storybook/react'
import { ArticleList } from 'entities/Arcticle/ui/ArticleList/ArticleList'

export default {
    title: '',
    component: ArticleList
}

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList { ...args }/>

export const Light = Template.bind({})
Light.args = {}
