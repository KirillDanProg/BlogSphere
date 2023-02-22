import { Modal } from './Modal'
import { type ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
    title: 'shared/Modal',
    component: Modal,
    args: {
        isOpen: true,
        children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley'
    }
}
const Template: ComponentStory<typeof Modal> = (args) => <Modal { ...args }/>

export const LightModal = Template.bind({})
LightModal.args = {}

export const DarkModal = Template.bind({})
DarkModal.decorators = [ThemeDecorator(Theme.DARK)]
DarkModal.args = {}
