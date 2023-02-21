import { type ReactNode } from 'react'
import { render } from '@testing-library/react'
import i18nForTests from 'shared/config/i18n/i18nForTests'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'

interface IComponentRender {
    route?: string
}

export const customComponentRender = (component: ReactNode, options: IComponentRender = {}) => {
    const { route = '/' } = options
    return render(
        <MemoryRouter initialEntries={ [route] }>
            <I18nextProvider i18n={ i18nForTests }>
                {component}
            </I18nextProvider>
        </MemoryRouter>
    )
}
