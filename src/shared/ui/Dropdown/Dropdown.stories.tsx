import { type ComponentStory } from '@storybook/react'
import { Dropdown } from './Dropdown'
import { Button } from '../Button/Button'

export default {
    title: 'shared/Dropdown',
    component: Dropdown
}

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown { ...args }/>

export const Default = Template.bind({})
Default.decorators = [
    (Story) => <div style={ { padding: '200px' } }>{Story()}</div>
]
Default.args = {
    trigger: <Button>OPEN</Button>,
    items: [
        { content: '123' },
        { content: 'qwe' },
        { content: 'asd' }
    ]
}

export const TopLeft = Template.bind({})
TopLeft.decorators = [
    (Story) => <div style={ { padding: '200px' } }>{Story()}</div>
]
TopLeft.args = {
    direction: 'top left',
    trigger: <Button>OPEN</Button>,
    items: [
        { content: '123' },
        { content: 'qwe' },
        { content: 'asd' }
    ]
}
