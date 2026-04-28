import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios';

const apiBaseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || '277196958932-b4tavnmkig14j63n326ppaf47r45k4e4.apps.googleusercontent.com';

// Configuração global do Axios - URL base da API
axios.defaults.baseURL = apiBaseUrl;
axios.defaults.withCredentials = true;

axios.interceptors.request.use((config) => {
  if (typeof config.url === 'string' && config.url.startsWith('http://localhost:3000')) {
    config.url = config.url.replace('http://localhost:3000', apiBaseUrl);
  }

  return config;
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={googleClientId}>
        <App />
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
