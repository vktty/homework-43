import './App.scss'
import { Home } from './components/Home'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Layout } from './layout/Layout'

import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      }
    ]
  },
  {
    path: "*",
    element: <h1>Page Not Found</h1>,
  },
], 
{
  basename: '/homework-43'
}
);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
