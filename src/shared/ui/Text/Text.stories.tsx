import { type ComponentStory } from '@storybook/react'
import { Text, TextAlign, TextSize, TextVariant } from './Text'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
    title: 'shared/Text',
    component: Text
}

const Template: ComponentStory<typeof Text> = (args) => <Text { ...args }/>

export const TextWithTitle = Template.bind({})
TextWithTitle.args = {
    title: 'Title',
    text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.  '
}
export const TextWithTitleDark = Template.bind({})
TextWithTitleDark.decorators = [ThemeDecorator(Theme.DARK)]
TextWithTitleDark.args = {
    title: 'Title',
    text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.  '
}
export const TitleOnly = Template.bind({})
TitleOnly.args = {
    title: 'Title'
}

export const TextOnly = Template.bind({})
TextOnly.args = {
    text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
}

export const TextWithTitleError = Template.bind({})
TextWithTitleError.args = {
    title: 'Title',
    text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    variant: TextVariant.ERROR
}

export const TextWithTitleErrorDark = Template.bind({})
TextWithTitleErrorDark.decorators = [ThemeDecorator(Theme.DARK)]
TextWithTitleErrorDark.args = {
    title: 'Title',
    text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    variant: TextVariant.ERROR
}

export const TitleOnlyCenter = Template.bind({})
TitleOnlyCenter.args = {
    title: 'Title',
    center: true
}

export const SizeM = Template.bind({})
SizeM.args = {
    size: TextSize.M,
    title: 'Title',
    text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.  '
}

export const SizeL = Template.bind({})
SizeL.args = {
    size: TextSize.L,
    title: 'Title',
    text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.  '
}

export const AlignedRight = Template.bind({})
AlignedRight.args = {
    align: TextAlign.RIGHT,
    title: 'Title',
    text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.  '
}
export const AlignedLeft = Template.bind({})
AlignedLeft.args = {
    align: TextAlign.LEFT,
    title: 'Title',
    text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.  '
}
export const AlignedCenter = Template.bind({})
AlignedCenter.args = {
    align: TextAlign.CENTER,
    title: 'Title',
    text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.  '
}
