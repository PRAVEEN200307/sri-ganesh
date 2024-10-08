import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';
import Manufacture from './page/Manufacture.jsx';
import Home from './page/Home.jsx';
import MainProduct from './page/MainProduct.jsx';
import QualityControl from './page/QualityControl.jsx';
import Contact from './page/contact.jsx';
import Dashboard from './page/Dashboard.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "manufacture",
        element: <Manufacture />,
      },
      {
        path: "product",
        element: <MainProduct />,
      },
      {
        path: "qualityControl",
        element: <QualityControl />,
      },
      {
        path:'contact',
        element: <Contact />
      },
    ],
  },
  {
    path:'dashboard',
    element : (<Dashboard />)
  }
]);


createRoot(document.getElementById('root')).render(
  // <StrictMode>
      <RouterProvider router={router} />
  // </StrictMode>,
)
