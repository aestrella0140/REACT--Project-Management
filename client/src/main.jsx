import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist';
import './index.css';

import LoginForm from './pages/Login.jsx';
import SignupForm from './pages/Signup.jsx';
import Dashboard from './pages/dashboard.jsx';
import LandingPage from './pages/landingPage.jsx';
import Profile from './pages/Profile.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />
      }, {
        path: '/Login',
        element: <LoginForm />
      }, {
        path: '/Signup',
        element: <SignupForm />
      }, {
        path: '/Profile',
        element: <Profile />
      }, {
        path: '/dashboard', 
        element: <Dashboard />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
