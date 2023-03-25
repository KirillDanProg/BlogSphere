import { type ComponentStory } from '@storybook/react'
import AddNewCommentForm from './AddNewCommentForm'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'

export default {
    title: 'features/AddNewComment',
    component: AddNewCommentForm
}

const Template: ComponentStory<typeof AddNewCommentForm> = (args) => <AddNewCommentForm { ...args }/>

export const Default = Template.bind({})
Default.decorators = [StoreDecorator({
    addNewComment: {
        text: ''
    }
})]
Default.args = {}

// export const Error = Template.bind({})
// Error.decorators = [StoreDecorator({
//     addNewComment: {
//         error: 'some error'
//     }
// })]
// Error.args = {}
