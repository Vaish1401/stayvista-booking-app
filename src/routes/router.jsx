import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";

import SignUp from "../pages/SignUp/SignUp";
import Flights from "../pages/Services/flights/Flights";
import CarServices from "../pages/Services/carservices/CarServices";
import Attraction from "../pages/Services/attraction/Attraction";
import Airport from "../pages/Services/airport/Airport";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/flights",
        element: <Flights />,
      },
      {
        path: "/carservices",
        element: <CarServices />,
      },
      {
        path: "/attractions",
        element: <Attraction />,
      },
      {
        path: "airport",
        element: <Airport />,
      },
    ],
  },
]);

export default router;
