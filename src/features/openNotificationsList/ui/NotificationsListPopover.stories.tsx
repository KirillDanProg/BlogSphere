import { type ComponentStory } from '@storybook/react'
import { NotificationsListPopover } from './NotificationsListPopover'

export default {
    title: '',
    component: NotificationsListPopover
}

const Template: ComponentStory<typeof NotificationsListPopover> = (args) =>
    <NotificationsListPopover { ...args }/>

export const Light = Template.bind({})
Light.args = {}
