import React from 'react';
import Home from './routes/Home/Home.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import ViewCategory from './routes/ViewCategory/ViewCategory.jsx';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <Home />, errorElement: <ErrorPage /> },
  {
    path: 'viewCategory',
    element: <ViewCategory />,
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
