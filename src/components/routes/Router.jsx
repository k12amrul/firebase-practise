import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Header1 from "../pages/Header1";
import Main from "../layout/Main";
import LogOut from "../pages/LogOut";
import Register from "../pages/Register";


export const router= createBrowserRouter([

    {
        path: '/',
        element :<Main></Main> ,
        children : [
            {
                path : '/login',
                element : <Login> </Login>
        
            },
            {
                path : '/register',
                element : <Register> </Register>
        
            },
            {
                path : '/logout',
                element : <LogOut> </LogOut>
        
            },

        ]


    },
    
    
] )
