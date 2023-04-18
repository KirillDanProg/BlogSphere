import { type ComponentStory } from '@storybook/react'
import { MyListBox } from './MyListBox'

export default {
    title: 'shared/MyListBox',
    component: MyListBox
}

const Template: ComponentStory<typeof MyListBox> = () => <MyListBox/>

export const Light = Template.bind({})
Light.args = {}
