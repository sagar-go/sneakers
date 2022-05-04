import React, { useState, useContext, createContext } from "react";

export const MyContext = createContext();
const Context = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const [cart, setcart] = useState([]);
  const [show, setshow] = useState(false);

  return (
    <>
      <MyContext.Provider
        value={{ show, setshow, counter, setCounter, cart, setcart }}
      >
        {children}
      </MyContext.Provider>
    </>
  );
};

export default Context;
