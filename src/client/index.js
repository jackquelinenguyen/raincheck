import React from 'react';
import Home from './routes/Home.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <Home />, errorElement: <ErrorPage /> },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
