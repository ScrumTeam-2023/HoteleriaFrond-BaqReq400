import React, { useState, createContext, useEffect} from "react";
import App from './App'
import { HomePage } from "./pages/HomePage/HomePage";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { NotFound } from "./pages/NotFound";

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
                    }
                ]

            }])

  return (
    <AuthContext.Provider>
        <RouterProvider router={routes}/>
    </AuthContext.Provider>
  )
}
