import React, { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();
const StateContext = ({ children }) => {
  const [itemQuantity, setItemQuantity] = useState(0);

  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    if (cartItems.find((availItem) => availItem.id === item.id)) {
      return;
    }
    setItemQuantity(itemQuantity + 1);
    setCartItems((prevItems) => [...prevItems, item]);
    console.log(cartItems);
  }
  return (
    <AppContext.Provider value={{ itemQuantity, cartItems, addToCart }}>
      {children}
    </AppContext.Provider>
  );
};

export default StateContext;
