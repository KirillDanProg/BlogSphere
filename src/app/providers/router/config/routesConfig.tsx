import { type RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { AppRoutes, RoutePath } from 'shared/config/routes/routes'
import { NotFound } from 'pages/NotFound/NotFound'
import { ProfilePage } from 'pages/ProfilePage'
import { ArticlesPage } from 'pages/ArticlesPage'
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage'
import { ArticleEditPage } from 'pages/ArticleEditPage'

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
        path: RoutePath.profile + ':id',
        element: <ProfilePage/>,
        authOnly: true
    },
    [AppRoutes.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlesPage/>,
        authOnly: true
    },
    [AppRoutes.ARTICLE_DETAILS_PAGE]: {
        path: RoutePath.article_details_page + ':id',
        element: <ArticleDetailsPage/>,
        authOnly: true
    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: RoutePath.article_edit_page,
        element: <ArticleEditPage/>,
        authOnly: true
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: RoutePath.article_create_page,
        element: <ArticleEditPage/>,
        authOnly: true
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath['not-found'],
        element: <NotFound/>
    }
}
