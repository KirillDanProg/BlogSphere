import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routesConfig } from 'app/providers/router'
import { Loader } from 'shared/ui/Loader/Loader'
import { PageLoader } from 'widgets/PageLoader/PageLoader'

export const AppRouter = () => {
    return (
        <Routes>
            {
                Object.values(routesConfig).map(({ element, path }) => (
                    <Route key={path}
                        path={path}
                        element={(
                            <Suspense fallback={<PageLoader />}>
                                <div className="page-content">
                                    {element}
                                </div>
                            </Suspense>
                        )} />
                ))
            }
        </Routes>
    )
}
