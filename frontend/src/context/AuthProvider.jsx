import { useState } from "react";
import AuthContext from "./AuthContext";

import { login, register } from "../services/authService";

import {
  saveToken,
  getToken,
  removeToken,
} from "../utils/token";

function AuthProvider({ children }) {

  const [token, setToken] = useState(getToken());

  const [loading, setLoading] = useState(false);

  /**
   * Decode JWT
   */
  const parseJwt = (jwt) => {

    try {

      return JSON.parse(atob(jwt.split(".")[1]));

    } catch {

      return null;

    }

  };

  /**
   * Current User
   */
  const user = token
    ? {
        email: parseJwt(token)?.sub,
      }
    : null;

  /**
   * Login
   */
  const loginUser = async (data) => {

    setLoading(true);

    try {

      const response = await login(data);

      // Change this if your backend returns jwt/accessToken
      const jwt = response.data.token;

      saveToken(jwt);

      setToken(jwt);

      return true;

    } catch (error) {

      console.error(error);

      return false;

    } finally {

      setLoading(false);

    }

  };

  /**
   * Register
   */
  const registerUser = async (data) => {

    setLoading(true);

    try {

      await register(data);

      return true;

    } catch (error) {

      console.error(error);

      return false;

    } finally {

      setLoading(false);

    }

  };

  /**
   * Logout
   */
  const logout = () => {

    removeToken();

    setToken(null);

  };

  const value = {

    token,

    user,

    loading,

    loginUser,

    registerUser,

    logout,

    isAuthenticated: !!token,

  };

  return (

    <AuthContext.Provider value={value}>

      {children}

    </AuthContext.Provider>

  );

}

export default AuthProvider;