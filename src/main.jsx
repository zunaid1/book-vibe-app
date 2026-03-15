import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'



const router = createBrowserRouter([
  {
    path: "/",
    element: <h2 className='font-bold text-5xl'>Hello From Home</h2>
  },
  {
    path: "/about",
    element: <h2 className='font-bold text-5xl'>Hello From About</h2>
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
