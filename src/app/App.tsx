import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Suspense } from 'react'
import { Sidebar } from 'widgets/Sidebar'

export const App = () => {
    // const { theme } = useTheme()

    return (
        <Suspense fallback="">
            <div id="app" className={ classNames('app', {}, []) }>
                <Navbar/>
                <div className="page-wrapper">
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </div>
        </Suspense>
    )
}
