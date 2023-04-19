import { type ComponentStory } from '@storybook/react'
import { MyListBox } from './MyListBox'

export default {
    title: 'shared/MyListBox',
    component: MyListBox
}

const Template: ComponentStory<typeof MyListBox> = (args) => <MyListBox { ...args }/>
export const Light = Template.bind({})
Light.decorators = [
    (Story) => <div style={ { padding: '200px' } }>{Story()}</div>
]
Light.args = {
    value: undefined,
    defaultValue: '1',
    items: [
        {
            value: '1',
            content: '111'
        },
        {
            value: '2',
            content: '222'
        },
        {
            value: '3',
            content: '333'
        }
    ]
}
