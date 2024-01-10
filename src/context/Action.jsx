import React, { createContext, useContext, useState } from "react";
const ActionContext = createContext();

const ActionProvider = ({ children }) => {
  const [deleteId, setDeleteId] = useState();
  const [edit, setEdit] = useState();
  return <ActionContext.Provider value={{ deleteId, setDeleteId, edit, setEdit }}>{children}</ActionContext.Provider>;
};

const useAction = () => useContext(ActionContext);
export { useAction, ActionProvider };