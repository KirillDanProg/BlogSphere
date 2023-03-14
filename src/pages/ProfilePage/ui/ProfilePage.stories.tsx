import { type ComponentStory } from '@storybook/react'
import ProfilePage from '../ui/ProfilePage'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'

export default {
    title: 'page/ProfilePage',
    component: ProfilePage
}
const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage/>
export const Light = Template.bind({})
Light.decorators = [StoreDecorator({
    profile: {
        readonly: true,
        form: {
            lastName: 'Vychuzhanin',
            firstName: 'Kirill',
            age: 24,
            instagram: 'instagram.com',
            country: 'Russia'
        },
        status: 'succeeded',
        error: null
    }
})]
Light.args = {}
