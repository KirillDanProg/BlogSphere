import { type ComponentStory } from '@storybook/react'
import { ArticleDetailsComments } from './ArticleDetailsComments'

export default {
    title: '',
    component: ArticleDetailsComments
}

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) =>
    <ArticleDetailsComments { ...args }/>

export const Light = Template.bind({})
Light.args = {}
