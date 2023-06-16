import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode basename={process.env.PUBLIC_URL}>>
      <App />
    </React.StrictMode>
  </BrowserRouter>
)
