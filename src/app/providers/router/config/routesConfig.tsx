import { type RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { AppRoutes, RoutePath } from 'shared/config/routes/routes'
import { NotFound } from 'pages/NotFound/NotFound'
import { ProfilePage } from 'pages/ProfilePage'

export type AppRouteProps = RouteProps & {
    authOnly?: boolean
}

export const routesConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage/>,
        authOnly: true
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath['not-found'],
        element: <NotFound/>
    }
}
