import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import ErrorElement from "../ErrorElement/ErrorElement";
import ContactUs from "../Pages/ContactUs/ContactUs";

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
    ],
  },
]);

export default router;
