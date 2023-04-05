import { type ComponentStory } from '@storybook/react'
import { Card } from 'shared/ui/Card/Card'

export default {
    title: 'shared/Card',
    component: Card
}

const Template: ComponentStory<typeof Card> = (args) => <Card { ...args }/>

export const Light = Template.bind({})
Light.args = {}
