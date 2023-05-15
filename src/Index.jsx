import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState, createContext, useEffect} from "react";
import App from './App'
import { HomePage } from "./pages/HomePage/HomePage";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { NotFound } from "./pages/NotFound";
import { LoginPage } from "./pages/LoginPage";
import { DashboardPage } from './pages/DashboardPage/DashboardPage'
import { AdicionalServices } from './pages/AdicionalServices/AdicionalServices';
import  { UserPage} from './pages/UserPage/UserPage'
import { Events } from './pages/Eventos/Events';
import { Hotel } from './pages/Hoteles/Hotel'
import { Rooms } from './pages/Rooms/Rooms';
import { Reservation } from './pages/Reservation/Reservation';

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
                        path: '/dashboard',
                        element:  loggedIn ? <DashboardPage/> : <LoginPage/>,
                        children:[
                            {
                                path: 'user',
                                element: <UserPage/>
                                
                            },
                            {
                                path: 'events',
                                element: <Events/>
                            },
                            {
                                path: 'services',
                                element: <AdicionalServices/>

                            },
                            {
                                path: 'hotel',
                                element: <Hotel/>
                            },
                            {
                                path: 'rooms',
                                element: <Rooms></Rooms>
                            },
                            {
                                path: 'reservation',
                                element: <Reservation/>
                            }
                        ]
                        

                    }
                    
                ]

            }])

  return (
    <AuthContext.Provider value={{loggedIn,setLoggedIn,dataUser,setDataUser}}>
        <RouterProvider router={routes}/>
    </AuthContext.Provider>
  )
}
    