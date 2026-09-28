import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
// import "./Component/S";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Career from "./Pages/Career/Career";
import Contact from "./Pages/Contact/Contact";
import SoftwareService from "./Pages/Services/SoftwareService";
import Studio from "./Pages/Services/Studio";
import Xperience from "./Pages/Services/Xperience";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "career",
        element: <Career />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "software",
        element: <SoftwareService />,
      },
      {
        path: "studio",
        element: <Studio />,
      },
      {
        path: "xperience",
        element: <Xperience />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
