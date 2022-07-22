import React, { createContext, useState } from "react";
export const AuthContext = createContext({
  setToken: () => {},
  token: "",
  outToken: () => {},
});
const Auth = ({ children }) => {
  const [token, setTokenn] = useState(false);
  const setToken = () => {
    localStorage.setItem("token", "login");
    return setTokenn(true);
  };
  const outToken = () => {
    localStorage.setItem("token", "");
    return setTokenn(false);
  };

  return (
    <AuthContext.Provider value={{ setToken, token, outToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default Auth;
