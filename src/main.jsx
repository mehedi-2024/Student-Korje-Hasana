import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home/Home.jsx';
import AboutUs from './Pages/About us/AboutUs.jsx';
import Galary from './Pages/Galary/Galary.jsx';
import Donet from './Pages/Donet/Donet.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import Account from './Pages/Account/Account.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: '/galary',
        element: <Galary />
      },
      {
        path: '/donet',
        element: <Donet />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/aboutUs',
        element: <AboutUs />
      },
      {
        path: '/account',
        element: <Account />
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
