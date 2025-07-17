import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import './main.css';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';

const RootLayout = () => (
  <>
    <ScrollToTop />
    <Outlet />
  </>
);

const root = document.getElementById("root");
const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
    ]
  }
]);

ReactDOM.createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);