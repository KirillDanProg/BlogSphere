import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Suspense, useEffect } from 'react'
import { Sidebar } from 'widgets/Sidebar'
import { initAuthUserDataThunk } from 'entities/User/model/slice/userSlice'
import { useDispatch } from 'react-redux'

export const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initAuthUserDataThunk())
    }, [dispatch])

    return (
        <Suspense fallback="">
            <div id="app" className={ classNames('app', {}, []) }>
                <Navbar/>
                <div className="page-wrapper">
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </div>
        </Suspense>
    )
}
