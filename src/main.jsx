import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router';

import App from './App.jsx'
import AboutPage from './pages/AboutPage/AboutPage'
import ContactPage from './pages/ContactPage/ContactPage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import EventsPage from './pages/EventsPage/EventsPage'
import LandingPage from './pages/LandingPage/LandingPage'

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
