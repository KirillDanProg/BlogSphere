import { type ComponentStory } from '@storybook/react'
import ArticleDetailsPage from './ArticleDetailsPage'

export default {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage
}

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) =>
    <ArticleDetailsPage { ...args }/>

export const Light = Template.bind({})
Light.args = {}
