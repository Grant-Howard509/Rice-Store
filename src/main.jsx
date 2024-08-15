import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createStorefrontApiClient } from '@shopify/storefront-api-client';
import { BrowserRouter } from 'react-router-dom';

const publicKey = import.meta.env.VITE_SHOPIFY_PUBLIC_KEY;

const client = createStorefrontApiClient({
  storeDomain: 'https://ricebandmerch.myshopify.com/',
  apiVersion: '2024-04',
  publicAccessToken: `${publicKey}`,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
