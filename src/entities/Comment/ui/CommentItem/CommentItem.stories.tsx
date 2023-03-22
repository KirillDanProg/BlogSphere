import { type ComponentStory } from '@storybook/react'
import { CommentItem } from './CommentItem'
import Avatar from 'shared/assets/images/defaultUserAvatar.jpg'
import { ThemeDecorator } from '../../../../shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from '../../../../app/providers/ThemeProvider'

export default {
    title: 'entities/Comment',
    component: CommentItem
}

const Template: ComponentStory<typeof CommentItem> = (args) => <CommentItem { ...args }/>

export const Light = Template.bind({})
Light.args = {
    comment: {
        _id: '1',
        avatar: Avatar,
        userId: '1',
        userName: 'Kirill',
        text: 'Some test comment'
    }
}

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
Dark.args = {
    comment: {
        _id: '1',
        avatar: Avatar,
        userId: '1',
        userName: 'Kirill',
        text: 'Some test comment'
    }
}
