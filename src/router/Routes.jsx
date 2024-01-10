import { createBrowserRouter } from "react-router-dom";
import Bookings from "../home/Booking Cancellation/Bookings";
import Home from "../home/home/Home";
import Layout from "../layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/bookings",
        element: <Bookings></Bookings>,
      },
    ],
  },
]);
export default router;
