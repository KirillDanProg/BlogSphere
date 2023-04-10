import { type ComponentStory } from '@storybook/react'
import ArticlesPage from './ArticlesPage'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'

export default {
    title: 'pages/ArticlesPage',
    component: ArticlesPage
}

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage { ...args }/>

export const Light = Template.bind({})
Light.decorators = [StoreDecorator({
    articlesPage: {
        ids: ['1', '2', '3', '4'],
        entities: {
            1: {
                title: 'test',
                viewCount: 100,
                userId: '1',
                _id: '1',
                tags: ['1', '2', '3']
            },
            2: {
                title: 'test2',
                viewCount: 200,
                userId: '2',
                blocks: [],
                _id: '2',
                tags: ['1', '2', '3']
            },
            3: {
                title: 'test3',
                viewCount: 200,
                userId: '3',
                blocks: [],
                _id: '3',
                tags: ['1', '2', '3']
            },
            4: {
                title: 'test4',
                viewCount: 200,
                userId: '4',
                blocks: [],
                _id: '4',
                tags: ['1', '2', '3']
            }
        }

    }
})]
Light.args = {}

export const Loading = Template.bind({})
Loading.decorators = [StoreDecorator({
    articlesPage: {
        status: 'loading',
        ids: ['1', '2', '3', '4'],
        entities: {
            1: {
                title: 'test',
                viewCount: 100,
                userId: '1',
                _id: '1',
                tags: ['1', '2', '3']
            },
            2: {
                title: 'test2',
                viewCount: 200,
                userId: '2',
                blocks: [],
                _id: '2',
                tags: ['1', '2', '3']
            },
            3: {
                title: 'test3',
                viewCount: 200,
                userId: '3',
                blocks: [],
                _id: '3',
                tags: ['1', '2', '3']
            },
            4: {
                title: 'test4',
                viewCount: 200,
                userId: '4',
                blocks: [],
                _id: '4',
                tags: ['1', '2', '3']
            }
        }

    }
})]
Loading.args = {}
