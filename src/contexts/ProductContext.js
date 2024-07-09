import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { CartContextProvider } from "./CartContext";

const URL = "https://rickandmortyapi.com/api/character";
const productContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const getProducts = async () => {
    const { data } = await axios.get(URL);
    setProducts(data.results);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <productContext.Provider value={{ products, product, setProduct }}>
      <CartContextProvider>{children}</CartContextProvider>
    </productContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(productContext);
};
