import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='https://lijiesu0.github.io/Wabisabi_React_Frontend/' >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
)
