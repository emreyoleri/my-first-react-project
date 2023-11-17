import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Users from './Pages/Users';
import Todos from './Pages/Todos';
import Home from './Pages/Home';
import Table from './components/Table';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Comments from './Pages/Comments';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/users',
    element: <Users />,
  },
  {
    path: '/yorumlar',
    element: <Comments />,
  },
  {
    path: '/todos',
    element: <Todos />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
