// react-router-dom
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// pages
import Home from './pages/Home'
import Sound from './pages/Sound'
import Light from './pages/Light'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/sound",
      element: <Sound />,
    },
    {
      path: "/light",
      element: <Light />,
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
