import { createContext, useContext, useState } from "react";

const cartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (id, item, quantity) => {
    const exist = cartItems.find((product) => product.id === id);
    if (exist) {
      item.quantity += quantity; //change the quantity of item
      setCartItems(
        cartItems.map((cartItem) => {
          return cartItem.id === exist.id ? item : cartItem;
        })
      );
    } else {
      item.quantity = quantity;
      setCartItems([...cartItems, item]);
    }
  };
  const removeFromCart = (id) => {
    setCartItems(
      cartItems.filter((cartItem) => {
        //filter out the item with id
        return cartItem.id !== id;
      })
    );
  };
  return (
    <cartContext.Provider
      value={{ cartItems, setCartItems, addToCart, removeFromCart }}
    >
      {children}
    </cartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(cartContext);
};
