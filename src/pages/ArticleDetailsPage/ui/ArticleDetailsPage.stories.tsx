import { type ComponentStory } from '@storybook/react'
import ArticleDetailsPage from './ArticleDetailsPage'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'
import defaultAvatar from 'shared/assets/images/defaultUserAvatar.jpg'

export default {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage
}

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) =>
    <ArticleDetailsPage { ...args }/>

export const Light = Template.bind({})
Light.decorators = [StoreDecorator({
    articleDetailsComments: {
        ids: ['1', '2'],
        entities: {
            1: {
                userId: '1',
                text: 'some comment',
                userName: 'Alex',
                avatar: defaultAvatar,
                _id: '1'
            },
            2: {
                userId: '2',
                text: 'another comment',
                userName: 'Kirill',
                avatar: defaultAvatar,
                _id: '2'
            }
        }
    }
})]
Light.args = {}
