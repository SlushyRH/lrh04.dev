import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import './main.css';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';

import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Project from './pages/Project';

const RootLayout = () => (
  <div className="flex flex-col min-h-screen">
    <ScrollToTop />
    <Header />
    
    <main className="flex-grow main-padding">
      <Outlet />
    </main>
    <Footer />
  </div>
);

const root = document.getElementById("root")!;
const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "*", element: <PageNotFound /> },
      { path: "/", element: <Home /> },
      { path: "/projects", element: <Projects /> },
      { path: "/about", element: <About /> },
      { path: "/projects/:slug", element: <Project /> },
    ]
  }
]);

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);

/* 
ReactDOM.createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
*/