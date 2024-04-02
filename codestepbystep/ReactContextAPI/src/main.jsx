import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { CounterProvider } from './contexts/Counter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* we wrap app through CounterProvider */}
    {/* when we create component in app then all can access counterProvider */}
    <CounterProvider>
       <App />
    </CounterProvider>
  </React.StrictMode>,
)
