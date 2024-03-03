import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Page/Home';
import Dashboard from './Page/Dashboard';
import Layout from './Page/Layout';
import Users from './Page/Users';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "dashboard/:id",
        element: <Dashboard></Dashboard>,
        loader: ({params})=>fetch(`http://localhost:5000/users/${params.id}`)
      },
      {
        path: "users",
        element: <Users></Users>,
        loader: ()=>fetch('http://localhost:5000/users')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
