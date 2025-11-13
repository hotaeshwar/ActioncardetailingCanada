import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Handle GitHub Pages redirect - ADD THIS CODE
if (sessionStorage.redirect) {
  const redirect = sessionStorage.redirect;
  sessionStorage.removeItem('redirect');
  window.history.replaceState(null, null, redirect);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)