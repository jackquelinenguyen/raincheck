import React from 'react';
import Home from './routes/Home/Home.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import ViewCategory from './routes/ViewCategory/ViewCategory.jsx';
import ViewNote from './routes/ViewNote/ViewNote.jsx';
import Auth from './routes/Auth/Auth.jsx';
import { createRoot } from 'react-dom/client';
import AddNote from './components/AddNote/AddNote.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import { CategoriesProvider } from './Context/categoriesContext.jsx';
import { NotesProvider } from './Context/notesContext.jsx';
import { AuthProvider } from './Context/authContext.jsx';

const router = createBrowserRouter([
  { path: '/', element: <Auth /> },
  { path: '/home', element: <Home />, errorElement: <ErrorPage /> },
  {
    path: 'home/viewCategory',
    element: <ViewCategory />,
    errorElement: <ErrorPage />,
    children: [],
  },
  { path: 'home/viewCategory/viewNote', element: <ViewNote /> },
  // { path: 'viewCategory/addNote', element: <AddNote /> },
]);

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <CategoriesProvider>
      <NotesProvider>
        <RouterProvider router={router} />
      </NotesProvider>
    </CategoriesProvider>
  </AuthProvider>
);
