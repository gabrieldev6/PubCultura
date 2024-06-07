// import React from 'react'
import ReactDOM from 'react-dom/client'

// import Header from './components/header/index.tsx'

import './index.css'

import router from './router.tsx'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  
    
    <RouterProvider router={router}/>
  
)
