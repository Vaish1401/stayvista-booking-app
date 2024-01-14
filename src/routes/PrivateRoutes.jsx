/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading/Loading";

const PrivateRoutes = ({ children }) => {
  const { state } = useContext(AuthContext);
  const location = useLocation();

  const { user, loading } = state;

  // console.log(location);
  // if (sloading) {
  //   return <Loading />;
  // }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }}></Navigate>; 
};

export default PrivateRoutes;
