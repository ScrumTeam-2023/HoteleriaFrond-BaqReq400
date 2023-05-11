import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState, createContext, useEffect} from "react";
import App from './App'
import { HomePage } from "./pages/HomePage/HomePage";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { NotFound } from "./pages/NotFound";
import { LoginPage } from "./pages/LoginPage";

export const AuthContext = createContext();

export const Index = () => {
        const [loggedIn, setLoggedIn] = useState(false)
        const [dataUser, setDataUser] = useState({
            name: '',
            username: '',
            role: ''
        })

            useEffect(()=> {
                let token = localStorage.getItem('token')
                if(token) setLoggedIn(true)

            }, [])






        const routes = createBrowserRouter([
            {
                path: '/',
                element: <App/>,
                errorElement: <NotFound/>,

                children:[
                    {
                        path:'/',
                        element: <HomePage/>
                    },
                    {
                        path: '/login',
                        element: <LoginPage></LoginPage>
                    },
                    {
                        path: '/dashboard'

                    }
                ]

            }])

  return (
    <AuthContext.Provider value={{loggedIn,setLoggedIn,dataUser,setDataUser}}>
        <RouterProvider router={routes}/>
    </AuthContext.Provider>
  )
}
    