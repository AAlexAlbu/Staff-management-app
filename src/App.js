import './App.css';
import {  BrowserRouter, createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import EmployeeFormPage from './pages/EmployeeFormPage';
import SignUpPage from './pages/SignUpPage';
import Homepage from './pages/Homepage';
import React from 'react';
import { Fragment } from 'react';
import RootPage from './pages/RootPage';


function App() {
  

  const routes = createBrowserRouter(
    [
      {
        path: '/',
        element: <RootPage />,
        children: [
          {
            index: true,
            element: < WelcomePage />
          },
          {
            path: 'signUp',
            element: <SignUpPage />
          },
          {
            path: 'homepage',
            element: <Homepage />,
          },
          {
            path: 'employeeForm',
            element: <EmployeeFormPage />
          }
        ]
      },
      
    ]
  )

  return (
        <React.Fragment >
          <RouterProvider router = {routes} >

          </RouterProvider>
        </React.Fragment>
  );
}

export default App;
