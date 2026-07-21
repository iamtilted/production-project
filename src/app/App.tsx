import React, {Suspense} from 'react';
import './styles/index.scss'

import {classNames} from "shared/lib/helpers/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/AppRouter";
import {Navbar} from "widgets/NavBar";
import {Sidebar} from "widgets/Sidebar";
import LangSwitcher from "shared/ui/LangSwitcher/LangSwitcher";



const App = () => {

    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={''}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;