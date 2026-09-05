import { StrictMode, children } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider,createBrowserRouter  } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './component/Home/Home.jsx'
import About from './component/About/About.jsx'
import Contact from './component/Contact/Contact.jsx'
import Service from './component/Service/Service.jsx'
import Project from './component/Project/Project.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />

      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/service",
        element: <Service />
      },
      {
        path: "/project",
        element: <Project />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
