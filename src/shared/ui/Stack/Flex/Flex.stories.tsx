import { type ComponentStory } from '@storybook/react'
import { Flex } from './Flex'

export default {
    title: 'shared/Flex',
    component: Flex
}

const Template: ComponentStory<typeof Flex> = (args) => <Flex { ...args }/>

export const Row = Template.bind({})
Row.args = {
    justify: 'between',
    children: (
        <>
            <div>element</div>
            <div>element</div>
            <div>element</div>
            <div>element</div>
        </>
    )
}

export const Column = Template.bind({})
Column.args = {
    direction: 'column',
    children: (
        <>
            <div>element</div>
            <div>element</div>
            <div>element</div>
            <div>element</div>
        </>
    )
}

export const RowGap4 = Template.bind({})
RowGap4.args = {
    gap: '4',
    children: (
        <>
            <div>element</div>
            <div>element</div>
            <div>element</div>
            <div>element</div>
        </>
    )
}
