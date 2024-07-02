import React, { useEffect } from "react";
import "./Home.scss"

import InfoSlider from "../../components/Infoslider/InfoSlider";
import Products from "../../components/Products/Products";
import CategorySlider from "../../components/categoryslider/CategorySlider";
import ActivePill from "../../components/activePill/ActivePill";
import InactivePill from "../../components/inactivePill/InactivePill";


import { getProducts } from "../../components/redux_api/actions/productActions";

import { useDispatch, useSelector } from "react-redux";

function Home() {
  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);


  return (
    <div>
      {products && (
        <div className="home-main-container">
          <InfoSlider products={products?.results?.slice(0, 4)} />
          <CategorySlider products={products?.results?.slice(4, 8)} />
          <div>
            <h1 className="delivery-heading">Want delivery today?</h1>
            <div className="delivery-container">
              <ActivePill content="All" />
              <InactivePill content="Agency Director" />
              <InactivePill content="Alan Rails" />
              <InactivePill content="Albert Einstein" />
              <InactivePill content="Alexander" />
              <InactivePill content="Amish Cyborg" />
              <InactivePill content="Annie" />
              <InactivePill content="Antenna Morty" />
              <InactivePill content="Antenna Rick" />
              <InactivePill content="Jerry Smith" />
              <InactivePill content="Summer Smith" />
              <InactivePill content="Beth Smith" />
            </div>
          </div>
          <Products products={products?.results?.slice(8, 12)} />
          <Products products={products?.results?.slice(15, 19)} />
        </div>
      )}
    </div>
  );
}

export default Home;
