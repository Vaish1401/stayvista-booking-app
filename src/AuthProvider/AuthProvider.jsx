/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: true,
  error: "",
};

export const AuthContext = createContext(initialState);

const AuthProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
    console.log(state.user);
  }, [state.user]);

  const login = async (email, password) => {
    setState({ ...state, loading: true });
    try {
      const response = await axios.post(
        "http://localhost:8800/api/auth/login",
        { email, password }
      );
      console.log(response);
      setState({ loading: false, user: response.data.details });
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setState({ ...state, user: null });
  };

  const authData = { state, login, logout };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
