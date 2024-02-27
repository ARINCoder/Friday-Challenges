import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/root';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider, Route, Routes, Link,
} from 'react-router-dom';
import ErrorPage from './error';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
