import { type ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { ProfileCard } from '../ui/ProfileCard'
import avatar from 'shared/assets/images/defaultUserAvatar.jpg'

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard
}

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard { ...args }/>

export const Light = Template.bind({})
Light.args = {
    profileData: {
        age: 24,
        country: 'Russia',
        firstName: 'Kirill',
        lastName: 'Prog',
        instagram: 'instagram.com',
        avatar
    }
}

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
Dark.args = {
    profileData: {
        age: 24,
        country: 'Russia',
        firstName: 'Kirill',
        lastName: 'Prog',
        instagram: 'instagram.com',
        avatar
    }
}

export const Error = Template.bind({})
Error.args = {
    profileError: 'Error'
}

export const Loading = Template.bind({})
Loading.args = {
    profileStatus: 'loading'
}

export const Readonly = Template.bind({})
Readonly.args = {
    profileData: {
        age: 24,
        country: 'Russia',
        firstName: 'Kirill',
        lastName: 'Prog',
        instagram: 'instagram.com',
        avatar
    },
    readonly: true
}
