/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading/Loading";

const PrivateRoutes = ({ children }) => {
  const { state, user } = useContext(AuthContext);
  const location = useLocation();

  // console.log(location);
  // if (loading) {
  //   return <Loading />
  // }

  if (state.user || user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default PrivateRoutes;
