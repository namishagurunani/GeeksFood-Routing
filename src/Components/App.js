import React, { memo } from 'react'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Layout from './Layout';
import ErrorPage from './ErrorPage';
import Home from './Home/Home';
import Quotes from './Quotes/Quotes'
import Restaurant from './Restaurant/Restaurant'
import Contact from './Contact/Contact';

import FoodProvider from '../Context/FoodContext';


const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/quotes',
          element: <Quotes />
        },
        {
          path: '/restaurants',
          element: <Restaurant />
        },
        {
          path: '/foods',
          element: <h2>Foods</h2>
        },
       
        {
          path: '/contact',
          element: <Contact />
        }
      ]
    },
  ]);
  return (
      <FoodProvider>
        <RouterProvider router={router} />
      </FoodProvider>
  )
}

export default memo (App)
