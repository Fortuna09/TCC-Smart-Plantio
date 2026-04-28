import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios';

// Configuração global do Axios - URL base da API
axios.defaults.baseURL = 'http://localhost:3000';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="277196958932-b4tavnmkig14j63n326ppaf47r45k4e4.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
