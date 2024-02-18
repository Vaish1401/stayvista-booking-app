import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";

import SignUp from "../pages/SignUp/SignUp";
import Flights from "../pages/Services/flights/Flights";
import CarServices from "../pages/Services/carservices/CarServices";
import Attraction from "../pages/Services/attraction/Attraction";
import Airport from "../pages/Services/airport/Airport";
import Account from "../components/Accounts/Account";
import Personal from "../components/Personal/Personal";
import PrivateRoutes from "./PrivateRoutes";
import Hotels from "../pages/Hotels/Hotels";
import NotFound from "../pages/NotFound/NotFound";
import HotelDetails from "../pages/HotelDetails/HotelDetails";

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
        path: "/account-settings",
        element: (
          <PrivateRoutes>
            <Account />
          </PrivateRoutes>
        ),
      },
      {
        path: "personal-info/:id",
        element: <Personal />,
        loader: {},
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
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
      { path: "hotels", element: <Hotels /> },
      {
        path: "hotels/:hotelID",
        element: <HotelDetails />,
        loader: ({ params }) =>
          fetch(
            `https://rahulfordev-json-server.vercel.app/cardDatas/${params.hotelID}`
          ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
