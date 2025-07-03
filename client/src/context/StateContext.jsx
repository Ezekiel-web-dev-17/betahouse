import React, { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();
const StateContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  // const [itemQuantity, setItemQuantity] = useState(cartItems.length);

  function addToCart(item) {
    if (cartItems.find((availItem) => availItem.id === item.id)) return;
    // setItemQuantity(itemQuantity + 1);
    setCartItems((prevItems) => [...prevItems, item]);
    console.log(cartItems);
  }

  function onRemove(property) {
    const cartDelete = cartItems.filter(
      (prevProperty) => prevProperty.image !== property.image
    );
    setCartItems(cartDelete);
  }

  return (
    <AppContext.Provider value={{ cartItems, addToCart, onRemove }}>
      {children}
    </AppContext.Provider>
  );
};

export default StateContext;
