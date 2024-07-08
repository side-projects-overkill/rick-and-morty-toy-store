import ProductView from "./ProductView";
import Products from "../Products/Products";

import "./ProductDetail.scss";
import { Text, TextVariants } from "@patternfly/react-core";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  getProductDetails,
  getProducts,
} from "../redux_api/actions/productActions";
import { useEffect } from "react";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.getProductDetails);
  const { products } = useSelector((state) => state.getProducts);

  useEffect(() => {
    if (product && id !== product.id) {
      dispatch(getProductDetails(id));
      dispatch(getProducts());
    }
  }, [dispatch, id, product]);

  return (
    <div>
      <ProductView product={product} />

      <div className="product-features">
        <Text component={TextVariants.h2}>Features & Details</Text>
        <Text component={TextVariants.p}>
          Fantastic Chocolate cake is flooded with love and sweetness. It's a
          pleasant cake that will definitely satisfy your unique sweet tooth.
          Also, it makes a wonderful contemplation which will take away the
          heart of your special one. It is a means of bringing the celebratory
          joy to a different level. The rich flavour and topping with chocolate
          will fill the bond with lots of sweetness with your special one.{" "}
        </Text>
        <strong style={{ color: "#0066CC" }}>Order Now!</strong>

        <Text component={TextVariants.p}>
          <strong>Toy Species:</strong> {product.species}
        </Text>
        <Text component={TextVariants.p}>
          <strong>Color Available:</strong> Red, Green, Yellow
        </Text>
        <Text component={TextVariants.p}>
          <strong>Size Available:</strong> Small, Medium, Large
        </Text>
        <Text component={TextVariants.p}>
          <strong>Gender Of Toy:</strong> {product.gender}
        </Text>

        <Text component={TextVariants.h3}>Delivery Details</Text>
        <Text component={TextVariants.p}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          consectetur ipsum, possimus, praesentium minima, vero a maiores
          deleniti sed porro dolore alias consequatur corporis nisi
          reprehenderit. Itaque incidunt saepe amet!
        </Text>

        <Text component={TextVariants.h3}>Care Instruction</Text>
        <Text component={TextVariants.p}>Don't try to eat</Text>
        <Text component={TextVariants.p}>Keep it away from animals</Text>
      </div>

      <div>
        <Text component={TextVariants.h2} className="recomended-heading">
          Recommended Toys
        </Text>
        <Products products={products?.results?.slice(13, 17)} />
      </div>
    </div>
  );
}

export default ProductDetail;
