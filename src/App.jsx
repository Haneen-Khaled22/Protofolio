import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout/Layout'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import { Toaster } from "@/components/ui/toaster";


function App() {
  let router = createBrowserRouter([
  {
    path:"",
    element:<Layout/>,
    children:[
      {index:true,element:<Home/>},
      {path:"*",element:<NotFound/>}
    ]


  }
    
  ])
  


  return (
    <>
   <RouterProvider router={router}></RouterProvider>
   <Toaster/>
     
    </>
  )
}

export default App
