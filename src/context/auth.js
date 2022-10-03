import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [adm, setAdm] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = JSON.parse(localStorage.getItem("user"));

    if (recoveredUser) {
      setUser(recoveredUser);
      isADM(recoveredUser.email);
    }

    if (adm != null || !recoveredUser) {
      setLoading(false);
    }
  }, [adm]);

  async function isADM(email) {
    const userJSON = JSON.stringify({
      email: email,
    });

    const responseADM = await api.post("adm.php", userJSON);

    if (responseADM.data.adm) {
      setAdm(responseADM.data.adm);
      return true;
    } else {
      setAdm(false);
      return false;
    }
  }

  async function login(user) {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));

    let adm = await isADM(user.email);
    if (adm) {
      navigate("/adm-dashboard");
    } else {
      navigate("/dashboard");
    }
  }

  function logout() {
    navigate("/");
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("pets");
  }

  return (
    <AuthContext.Provider
      value={{
        authenticated: !!user,
        user,
        adm,
        loading,
        isADM,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
