import { useSelector } from 'react-redux'
import { getUserId } from 'entities/User/model/selectors/userSelectors'
import { Navigate, useLocation } from 'react-router-dom'
import { RoutePath } from 'shared/config/routes/routes'

export function RequireAuth({ children }: { children: JSX.Element }) {
    const isAuth = useSelector(getUserId)
    const location = useLocation()
    if (!isAuth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} />
    }
    return children
}
