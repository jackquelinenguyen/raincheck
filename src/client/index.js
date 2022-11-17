import React from 'react';
import Home from './routes/Home/Home.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import ViewCategory from './routes/ViewCategory/ViewCategory.jsx';
import ViewNote from './routes/ViewNote/ViewNote.jsx';
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

const router = createBrowserRouter([
  { path: '/', element: <Home />, errorElement: <ErrorPage /> },
  {
    path: 'viewCategory',
    element: <ViewCategory />,
    errorElement: <ErrorPage />,
  },
  { path: 'viewCategory/viewNote', element: <ViewNote /> },
  { path: 'viewCategory/addNote', element: <AddNote /> },
]);

createRoot(document.getElementById('root')).render(
  <CategoriesProvider>
    <NotesProvider>
      <RouterProvider router={router} />
    </NotesProvider>
  </CategoriesProvider>
);
