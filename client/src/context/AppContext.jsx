import React, { createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const value = {
    // You can add shared states or functions here later
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
