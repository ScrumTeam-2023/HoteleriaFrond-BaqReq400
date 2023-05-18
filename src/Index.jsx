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
import { Events } from './pages/Events/EventsPage';
import { Hotel } from './pages/Hoteles/Hotel'
import { Rooms } from './pages/Rooms/Rooms';
import { ReservationPage } from './pages/Reservation/ReservationPage';
import { UserUpdate } from './pages/UserPage/UserUpdate';
import { EventUpdate } from './pages/Events/EventsUpdate';
import { RegisterPage } from './pages/RegisterPage';
import { ReservationUpdate } from './pages/Reservation/ReservationUpdate';

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
                        path: '/register',
                        element: <RegisterPage/>
                    },
                    {
                        path: '/dashboard',
                        element:  loggedIn ? <DashboardPage/> : <LoginPage/>,
                        children:[
                            {
                                path: 'user',
                                element: <UserPage/>,
                                
                            },
                            {
                                path: 'user/update/:id',
                                element: <UserUpdate/>,
                                
                            },
                            {
                                path: 'events',
                                element: <Events/>
                            },
                            {
                                path: 'events/update/:id',
                                element: <EventUpdate/>
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
                                element: <ReservationPage/>
                            },
                            {
                                path: 'reservation/update/:id',
                                element: <ReservationUpdate/>
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
    