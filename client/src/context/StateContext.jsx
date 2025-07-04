import React, { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();
const StateContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    if (cartItems.find((availItem) => availItem.id === item.id)) return;
    setCartItems((prevItems) => [...prevItems, item]);
  }

  function onRemove(property) {
    const cartDelete = cartItems.filter(
      (prevProperty) => prevProperty.image !== property.image
    );
    setCartItems(cartDelete);
  }

  function numToString(num) {
    const strArr = String(num);
    let finalStr = "";

    for (let i = 0; i < strArr.length; i++) {
      if ((strArr.length - i) % 3 === 0) {
        finalStr += `,${strArr[i]}`;
      } else {
        finalStr += strArr[i];
      }
    }

    return finalStr.startsWith(",") ? finalStr.slice(1) : finalStr;
  }

  return (
    <AppContext.Provider
      value={{ cartItems, addToCart, onRemove, numToString }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default StateContext;
