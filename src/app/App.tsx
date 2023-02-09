import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Suspense } from 'react'
import { Sidebar } from 'widgets/Sidebar'
import { useTheme } from 'shared/lib/hooks/useTheme'
import { PageLoader } from 'widgets/PageLoader/PageLoader'
import './styles/index.scss'

export const App = () => {
    const { theme } = useTheme()

    return (
        
            <div className={classNames('app', {}, [theme])}>
                <Navbar />
                <div className="page-wrapper">
                    <Sidebar />
                    <AppRouter />
                </div>
            </div>
    
    )
}
