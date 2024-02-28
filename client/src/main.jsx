import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist';
import './index.css';

import LoginForm from './pages/Login.jsx';
import SignupForm from './pages/Signup.jsx';
import dash from './pages/dashboard.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true, 
        element: <LoginForm />
      },{
        path: '/Login',
        element: <SignupForm />
      }, {
        
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
