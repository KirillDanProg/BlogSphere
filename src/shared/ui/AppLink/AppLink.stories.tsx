import { AppLink, AppLinkVariant } from './AppLink'
import { type ComponentStory } from '@storybook/react'

export default {
    title: 'shared/AppLink',
    component: AppLink
}

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink { ...args }/>

export const DefaultAppLink = Template.bind({})
DefaultAppLink.args = {
    children: 'default',
    variant: AppLinkVariant.DEFAULT
}

export const OutlinedAppLink = Template.bind({})
OutlinedAppLink.args = {
    children: 'outlined',
    variant: AppLinkVariant.OUTLINED
}
