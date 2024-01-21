import React, { useState, useContext } from "react";

const GlobalContext = React.createContext();

export const AppProvider = ({children}) => {
  const [revealMenu, setRevealMenu] = useState(false);
  return (
    <GlobalContext.Provider value={{ revealMenu, setRevealMenu }}>
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
