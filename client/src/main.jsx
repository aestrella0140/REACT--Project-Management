import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist';
import './index.css';

import LoginForm from './pages/Login.jsx';
import SignupForm from './pages/Signup.jsx';
import Dashboard from './pages/dashboard.jsx';
import Profile from './pages/Profile.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />
      }, {
        path: '/Login',
        element: <LoginForm />
      }, {
        path: '/Signup',
        element: <SignupForm />
      }, {
        path: '/Profile',
        element: <Profile />
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
