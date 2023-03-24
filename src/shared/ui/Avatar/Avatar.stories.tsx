import { type ComponentStory } from '@storybook/react'
import { Avatar } from './Avatar'
import userAvatar from '../../assets/images/defaultUserAvatar.jpg'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'

export default {
    title: 'shared/Avatar',
    component: Avatar
}

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar { ...args }/>

export const Small = Template.bind({})
Small.decorators = [StoreDecorator({
    profile: {
        form: {
            avatar: userAvatar
        }
    }
})]
Small.args = {
    size: 60,
    src: userAvatar
}
export const Large = Template.bind({})
Large.decorators = [StoreDecorator({
    profile: {
        form: {
            avatar: userAvatar
        }
    }
})]
Large.args = {
    size: 300,
    src: userAvatar
}

export const Circle = Template.bind({})
Circle.decorators = [StoreDecorator({
    profile: {
        form: {
            avatar: userAvatar
        }
    }
})]
Circle.args = {
    size: 300,
    src: userAvatar,
    circle: true
}
