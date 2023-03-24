export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS_PAGE = 'article_details_page',
    NOT_FOUND = 'not-found'
}

export type RoutesType = Record<AppRoutes, string>

export const RoutePath: RoutesType = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS_PAGE]: '/articles/',
    [AppRoutes.NOT_FOUND]: '*'
}
