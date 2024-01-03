import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Suspense, useEffect } from 'react'
import { Sidebar } from 'widgets/Sidebar'
import { initAuthUserDataThunk } from 'entities/User/model/slice/userSlice'
import { useSelector } from 'react-redux'
import { getIsInit } from 'entities/User/model/selectors/userSelectors'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

export const App = () => {
    const dispatch = useAppDispatch()
    const isInit = useSelector(getIsInit)
    useEffect(() => {
        void dispatch(initAuthUserDataThunk())
    }, [dispatch])

    return (
        <Suspense fallback="">
            <div id="app" className={ classNames('app', {}, []) }>
                <Navbar/>
                <div className="page-wrapper">
                    <Sidebar/>
                    {
                        isInit && <AppRouter/>
                    }
                </div>
            </div>
        </Suspense>
    )
}
