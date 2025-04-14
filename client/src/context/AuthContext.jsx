import React, { createContext, useContext, useState, useEffect } from "react";

// Create Context
const UserContext = createContext();

// Create Provider Component
const UserProvider = ({ children }) => {
  const [auth, setAuth] = useState({ user: null, token: "", role: "" });

  // Load auth data from localStorage
  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        user: parseData.user,
        token: parseData.token,
      });
    }
  }, []);

  // Logout function
  const logout = () => {
    // Clear auth from localStorage
    localStorage.removeItem("auth");

    // Reset auth state
    setAuth({ user: null, token: "", role: "" });
  };

  return (
    <UserContext.Provider value={[auth, setAuth, logout]}>
      {children}
    </UserContext.Provider>
  );
};

// Create custom hook
const useAuth = () => useContext(UserContext);

export { UserProvider, useAuth };
