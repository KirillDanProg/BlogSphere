import { type ComponentStory } from '@storybook/react'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'

export default {
    title: '',
    component: ArticleListItem
}

const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem { ...args }/>

export const Light = Template.bind({})
Light.args = {}
