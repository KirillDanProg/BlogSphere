import { Route, Routes } from 'react-router-dom'
import { routesConfig } from 'app/providers/router'
import { Suspense, useCallback } from 'react'
import { PageLoader } from 'widgets/PageLoader/PageLoader'
import { RequireAuth } from 'app/providers/router/ui/RequireAuth'
import { type AppRouteProps } from 'app/providers/router/config/routesConfig'

export const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={ <PageLoader/> }>
                {route.element}
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
