import React from "react";
import {Routes,Route,Navigate} from 'react-router-dom'
import { authRoutes,publicRoutes } from "../routes";
import { APPLICATIONS_ROUTE } from "../utils/consts";

const AppRouter = () =>{
    
    const user = JSON.parse(localStorage.getItem('profile'));


    const isAuth = user ? true:false
    return(
        
            <Routes>
                {isAuth && authRoutes.map(({path,Component}) =>
                    <Route key={path} path={path} element={<Component/>} exact/>
                )}
                {publicRoutes.map(({path,Component}) =>
                    <Route key={path} path={path} element={<Component/>} exact/>
                )}
                <Route path='*' element={<Navigate to={APPLICATIONS_ROUTE}/>}/>
            </Routes>
    );
}


export default AppRouter;