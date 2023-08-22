import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AccionProductosProvider } from './acciones/AccionProductos.jsx' 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AccionProductosProvider>
      <App />
    </AccionProductosProvider>
    
  </React.StrictMode>
);
