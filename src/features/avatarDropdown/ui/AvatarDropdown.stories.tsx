import { type ComponentStory } from '@storybook/react'
import { AvatarDropdown } from './AvatarDropdown'

export default {
    title: '',
    component: AvatarDropdown
}

const Template: ComponentStory<typeof AvatarDropdown> = (args) => <AvatarDropdown { ...args }/>

export const Light = Template.bind({})
Light.args = {}
