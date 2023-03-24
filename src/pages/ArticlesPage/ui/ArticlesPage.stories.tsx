import { type ComponentStory } from '@storybook/react'
import ArticlesPage from './ArticlesPage'

export default {
    title: 'pages/ArticlesPage',
    component: ArticlesPage
}

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage { ...args }/>

export const Light = Template.bind({})
Light.args = {}
