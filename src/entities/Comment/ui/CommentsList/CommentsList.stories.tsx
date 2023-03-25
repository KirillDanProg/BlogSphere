import { type ComponentStory } from '@storybook/react'
import { CommentsList } from './CommentsList'
import defaultAvatar from 'shared/assets/images/defaultUserAvatar.jpg'
import { type CommentType } from '../../model/types/comment'

export default {
    title: 'entities/Comment/List',
    component: CommentsList
}
const comments: CommentType[] = [
    {
        userId: '1',
        text: 'some comment',
        userName: 'Alex',
        avatar: defaultAvatar,
        _id: '1',
        createdAt: '01.01.2001',
        postId: '1'
    },
    {
        userId: '2',
        text: 'another comment',
        userName: 'Bob',
        avatar: defaultAvatar,
        _id: '2',
        createdAt: '01.01.2001',
        postId: '2'
    },
    {
        userId: '3',
        text: 'Hello world!!!',
        userName: 'John',
        avatar: defaultAvatar,
        _id: '3',
        createdAt: '01.01.2001',
        postId: '3'
    }
]

const Template: ComponentStory<typeof CommentsList> = (args) => <CommentsList { ...args }/>

export const Default = Template.bind({})
Default.args = {
    comments
}

export const Loading = Template.bind({})
Loading.args = {
    comments,
    status: 'loading'
}
