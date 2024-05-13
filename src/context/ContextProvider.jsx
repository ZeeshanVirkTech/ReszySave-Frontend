import React, { createContext, useState, useContext } from "react";
const ContextProvider = createContext();
export const useContextData = () => {
  return useContext(ContextProvider);
};
export const Context = ({ children }) => {
  // const [selectedMenu, setSelectedMenu] = useState("Home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
    console.log("hit");
  };
  const handleSelectMenu = (menu) => {
    setSelectedMenu(menu);
  };
  const value = {
    // selectedMenu,
    isSidebarOpen,
    handleToggleSidebar,
    // handleSelectMenu,
  };

  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
};
