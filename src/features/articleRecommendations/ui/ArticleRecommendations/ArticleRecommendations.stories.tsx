import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ArticleRecommendations } from './ArticleRecommendations'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'features/ArticleRecommendations',
    component: ArticleRecommendations,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticleRecommendations>

const Template: ComponentStory<typeof ArticleRecommendations> = (args) =>
    <ArticleRecommendations { ...args } />

export const Normal = Template.bind({})
Normal.args = {}
