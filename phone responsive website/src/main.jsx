import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

import {UserContextProvider} from "./Context"



ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </UserContextProvider>
  
)
