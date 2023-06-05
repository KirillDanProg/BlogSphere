import { type ComponentStory } from '@storybook/react'
import { ListBox } from './Listbox'

export default {
    title: 'shared/MyListBox',
    component: ListBox
}

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox { ...args }/>
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
