import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
