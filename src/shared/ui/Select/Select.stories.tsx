import { type ComponentStory } from '@storybook/react'
import { Select } from './Select'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
    title: 'shared/Select',
    component: Select
}

const Template: ComponentStory<typeof Select> = (args) => <Select { ...args }/>

export const Default = Template.bind({})
Default.args = {
    options: [
        {
            value: '1',
            content: 'First'
        },
        {
            value: '2',
            content: 'Second'
        },
        {
            value: '3',
            content: 'Third'
        }
    ]
}

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
Dark.args = {
    options: [
        {
            value: '1',
            content: 'First'
        },
        {
            value: '2',
            content: 'Second'
        },
        {
            value: '3',
            content: 'Third'
        }
    ]
}

export const Blue = Template.bind({})
Blue.decorators = [ThemeDecorator(Theme.BLUE)]
Blue.args = {
    options: [
        {
            value: '1',
            content: 'First'
        },
        {
            value: '2',
            content: 'Second'
        },
        {
            value: '3',
            content: 'Third'
        }
    ]
}
