import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router';

import App from './App.jsx'
import AboutPage from './pages/AboutPage/AboutPage.jsx'
import ContactPage from './pages/ContactPage/ContactPage.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
import EventsPage from './pages/EventsPage/EventsPage.jsx'
import LandingPage from './pages/LandingPage/LandingPage.jsx'

let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
     children: [
      { index: true, Component: LandingPage },
      { path: "about", Component: AboutPage },
      { path: "events", Component: EventsPage },
      { path: "contact", Component: ContactPage },
      { path: "curriculum", element: <h1>Rerouting to curriculum site...</h1> },
      { path: "*", Component: ErrorPage}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
