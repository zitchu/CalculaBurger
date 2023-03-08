
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './css/style.css';
import './css/custom.css';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Calculadora from './pages/Calculadora';
import ErrorPage from './pages/ErrorPage';
import Contatos from './pages/Contatos';

/* const router = createBrowserRouter([{
  path: "/", element: <Home />
},
{path: "Admin", element:<Admin />},
{path: "Calculadora", element: <Calculadora />},
]) */

const router = createBrowserRouter([
  {path: "/", element: <App />, errorElement: <ErrorPage />, children: [
    {path: "/", element: <Home />},
    {path: "Admin", element:<Admin />},
    {path: "Calculadora", element: <Calculadora />},
    {path: "/contatos/:id", element: <Contatos />}
  ],},
]);


ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);