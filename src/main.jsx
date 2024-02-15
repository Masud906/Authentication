import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root';
import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';
import AuthProvider from './provider/AuthProvider';
import Orders from './component/Orders';
import PrivateRoute from './Routes/PrivateRoute';
import Protfin from './component/Protfin';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
       {
        path: '/',
        element: <Home></Home>,
       },
       {
        path: '/login',
        element: <Login></Login>,
       },
       {
        path: '/register',
        element: <Register></Register>,
       },
       {
        path: '/orders',
        element: <PrivateRoute><Orders></Orders></PrivateRoute>,
       },
       {
        path: '/profile',
        element: <PrivateRoute><Protfin></Protfin></PrivateRoute>
       },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
