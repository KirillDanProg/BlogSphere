import { AppLink } from 'shared/ui'
import { type StoryFn } from '@storybook/react'
import { AppLinkVariant } from 'shared/ui/AppLink/AppLink'

export default {
    title: 'shared/AppLink',
    component: AppLink
}

const Template: StoryFn<typeof AppLink> = (args) => <AppLink { ...args }/>

export const DefaultAppLink = Template.bind({})
DefaultAppLink.args = {
    children: 'default',
    to: '/',
    variant: AppLinkVariant.DEFAULT
}

export const OutlinedAppLink = Template.bind({})
OutlinedAppLink.args = {
    children: 'outlined',
    to: '/',
    variant: AppLinkVariant.OUTLINED
}
