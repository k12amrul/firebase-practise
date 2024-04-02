import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './components/routes/Router.jsx'
import { HelmetProvider } from 'react-helmet-async'

// const helmetContext = {title : 'test-helmet'};
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <HelmetProvider >

   <RouterProvider router={router}>  </RouterProvider>
     </HelmetProvider  >
  </React.StrictMode>,
)
