import { type ComponentStory } from '@storybook/react'
import { Skeleton } from '../ui/Skeleton'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
    title: 'shared/Skeleton',
    component: Skeleton
}

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton { ...args }/>

export const DefaultLight = Template.bind({})
DefaultLight.args = {
    width: 400,
    height: 100
}

export const DefaultDark = Template.bind({})
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]
DefaultDark.args = {
    width: 400,
    height: 100

}

export const CircleLight = Template.bind({})
CircleLight.args = {
    width: 200,
    height: 200,
    borderRadius: '50%'
}

export const CircleDark = Template.bind({})
CircleDark.decorators = [ThemeDecorator(Theme.DARK)]
CircleDark.args = {
    width: 200,
    height: 200,
    borderRadius: '50%'
}
