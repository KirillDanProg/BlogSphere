import { Suspense, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routesConfig } from 'app/providers/router'
import { PageLoader } from 'widgets/PageLoader/PageLoader'
import { useSelector } from 'react-redux'
import { getUserId } from 'entities/User/model/selectors/getUserId/getUserId'

export const AppRouter = () => {
    const isAuth = useSelector(getUserId)
    const routes = useMemo(() => {
        return Object.values(routesConfig)
            .filter(route => {
                if (route.authOnly && !isAuth) {
                    return false
                }
                return true
            })
    }, [isAuth])
    return (
        <Routes>
            {
                routes
                    .map(({
                        element,
                        path
                    }) => (
                        <Route key={ path }
                            path={ path }
                            element={ (
                                <Suspense fallback={ <PageLoader/> }>
                                    <div className="page-content">
                                        {element}
                                    </div>
                                </Suspense>
                            ) }/>
                    ))
            }
        </Routes>
    )
}
