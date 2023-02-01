import {Link, Route, Routes} from "react-router-dom";
import {AboutPageLazy} from "./pages/AboutPage/AboutPageLazy";
import {MainPageLazy} from "./pages/MainPage/MainPageLazy";
import {Suspense} from "react";
import "./styles/index.scss"
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

export const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to="/main">Главная </Link>
            <Link to="/about">Инфо</Link>
            <button onClick={toggleTheme}>Change theme</button>
            <Suspense fallback="...loading">
                <Routes>
                    <Route path="/main" element={<MainPageLazy/>}/>
                    <Route path="/about" element={<AboutPageLazy/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

