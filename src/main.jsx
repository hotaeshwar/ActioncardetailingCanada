import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'

// Handle GitHub Pages redirect
if (sessionStorage.redirect) {
  const redirect = sessionStorage.redirect;
  sessionStorage.removeItem('redirect');
  window.history.replaceState(null, null, redirect);
}

const rootElement = document.getElementById('root')

if (rootElement.hasChildNodes()) {
  // Prerendered HTML exists — hydrate it
  ReactDOM.hydrateRoot(
    rootElement,
    <StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StrictMode>
  )
} else {
  // Normal render for dev
  createRoot(rootElement).render(
    <StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StrictMode>
  )
}