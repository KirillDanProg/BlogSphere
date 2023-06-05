import { type ComponentStory } from '@storybook/react'
import { Popover } from './Popover'

export default {
    title: '',
    component: Popover
}

const Template: ComponentStory<typeof Popover> = (args) => <Popover { ...args }/>

export const Light = Template.bind({})
Light.args = {}
