import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import AddContentsPage from './routes/AddContentsPage/index.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';

const routes = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'/',
        element:<AddContentsPage />,
      },
    ]
  },
  
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
