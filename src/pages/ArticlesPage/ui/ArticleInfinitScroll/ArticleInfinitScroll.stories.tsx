import { type ComponentStory } from '@storybook/react'
import { ArticleInfinitScroll } from './ArticleInfinitScroll'

export default {
    title: '',
    component: ArticleInfinitScroll
}

const Template: ComponentStory<typeof ArticleInfinitScroll> = (args) =>
    <ArticleInfinitScroll { ...args }/>

export const Light = Template.bind({})
Light.args = {}
