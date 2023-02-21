export const AppRoutes = {
    MAIN: 'main',
    ABOUT: 'about',
    NOT_FOUND: 'not-found'
} as const

export type RoutesType =
    'main'
    | 'about'
    | 'not-found'

export const RoutePath: Record<RoutesType, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*'
}
