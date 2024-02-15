/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: true,
  error: "",
};

export const AuthContext = createContext(initialState);

const AuthProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const [loginError, setLoginError] = useState("");
  const [hoteData, setHotelData] = useState([]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
    // console.log(state.user);
  }, [state.user]);

  const login = async (email, password) => {
    setState({ ...state, loading: true });
    try {
      const response = await axios.post(
        "http://localhost:8800/api/auth/login",
        { email, password }
      );
      // console.log(response);
      setState({ loading: false, user: response.data.details });
    } catch (error) {
      setLoginError(error.response.data.message);
      // console.log(error.response.data.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setState({ ...state, user: null });
  };

  const { data, loading, error, reFetch } = useFetch(
    `https://rahulfordev-json-server.vercel.app/cardDatas`
  );

  useEffect(() => {
    setHotelData(data);
  }, [data]);

  const authData = { state, login, logout, loginError, hoteData };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
