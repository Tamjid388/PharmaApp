import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { SignIn } from './Pages/Auth/SignIn';
import { Home } from './Pages/Home/Home';
import { Demo } from './Pages/Demo/Demo';
import { Demo2 } from './Pages/Demo/Demo2';
import { MainLayout } from './Layout/MainLayout';




const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    children:[
      {
    index:true, // this is the default route 
 element:<Home/>,
      },
      {
        path:"/test",
        element:<Demo></Demo>
      },
      {
        path:"/demo2",
        element:<Demo2/>
      }
    ]
  },{
    path:"/signin",
    element:<SignIn/>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
