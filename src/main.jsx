import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import "./css/index.css"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Now when we put the app inside of this, it gives aility to change componenets that we're rendering on screen based
    on slash route that we're going to for our web page */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
