import { type ComponentStory } from '@storybook/react'
import { CommentItem } from './CommentItem'
import Avatar from 'shared/assets/images/defaultUserAvatar.jpg'
import { ThemeDecorator } from '../../../../shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from '../../../../app/providers/ThemeProvider'

export default {
    title: 'entities/Comment/Item',
    component: CommentItem
}

const Template: ComponentStory<typeof CommentItem> = (args) => <CommentItem { ...args }/>

export const Default = Template.bind({})
Default.args = {
    comment: {
        _id: '1',
        avatar: Avatar,
        userId: '1',
        userName: 'Kirill',
        text: 'Some test comment',
        createdAt: '01.01.2001',
        postId: '1'
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
        text: 'Some test comment',
        createdAt: '01.01.2001',
        postId: '2'
    }
}

export const Loading = Template.bind({})
Loading.args = {
    status: 'loading'
}

export const LoadingDark = Template.bind({})
LoadingDark.decorators = [ThemeDecorator(Theme.DARK)]
LoadingDark.args = {
    status: 'loading'
}
