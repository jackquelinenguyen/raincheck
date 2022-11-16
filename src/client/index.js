import React from 'react';
import Home from './routes/Home.jsx';

import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', 
  element: <Home /> }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
