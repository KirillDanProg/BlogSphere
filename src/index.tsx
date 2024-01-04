import './shared/config/i18n/i18n'
import './app/styles/index.scss'
import { createRoot } from 'react-dom/client'
import { App } from 'app/App'
import { StoreProvider } from 'app/providers/StoreProvider'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'

const container = document.getElementById('root')
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!)

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </StoreProvider>
    </BrowserRouter>
)
