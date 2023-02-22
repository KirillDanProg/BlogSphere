import { type StoryFn } from '@storybook/react'
import 'app/styles/index.scss'

export const StyleDecorator = (Story: StoryFn) => {
    return <div className={ 'app' }><Story/></div>
}
