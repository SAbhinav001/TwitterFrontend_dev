import React, { createContext, useState } from "react";

export const Context = createContext();

export const AppContext = (props) => {
  const [fetchedUserStatus, setFertchedUserData] = useState({});

  return (
    <Context.Provider value={{ fetchedUserStatus, setFertchedUserData }}>
      {props.children}
    </Context.Provider>
  );
};
