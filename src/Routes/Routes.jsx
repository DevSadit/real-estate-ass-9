import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import ErrorElement from "../ErrorElement/ErrorElement";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";
import Resgister from "../Pages/Register/Resgister";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

        loader: () => fetch(`/estates.json`),
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/updateprofile",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Resgister></Resgister>,
      },
    ],
  },
]);

export default router;
