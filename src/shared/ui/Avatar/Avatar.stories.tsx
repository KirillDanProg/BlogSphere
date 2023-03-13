import { type ComponentStory } from '@storybook/react'
import { Avatar } from './Avatar'
import userAvatar from '../../assets/images/defaultUserAvatar.png'

export default {
    title: '',
    component: Avatar
}

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar { ...args }/>

export const AvatarComponent = Template.bind({})
AvatarComponent.args = {
    size: 150,
    src: userAvatar
}
