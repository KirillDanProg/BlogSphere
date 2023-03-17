import { Route, Routes } from 'react-router-dom'
import { routesConfig } from 'app/providers/router'
import { Suspense, useCallback } from 'react'
import { PageLoader } from 'widgets/PageLoader/PageLoader'
import { RequireAuth } from 'app/providers/router/ui/RequireAuth'

export const AppRouter = () => {
    const renderWithWrapper = useCallback((route) => {
        const element = (
            <Suspense fallback={ <PageLoader/> }>
                <div className="page-content">
                    {route.element}
                </div>
            </Suspense>
        )
        return (
            <Route
                key={ route.path }
                path={ route.path }
                element={ route.authOnly
                    ? <RequireAuth>{element}</RequireAuth>
                    : element
                }/>
        )
    }, [])

    return (
        <Routes>
            {Object.values(routesConfig)
                .map(renderWithWrapper)}
        </Routes>
    )
}
