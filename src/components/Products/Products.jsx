import React from "react";
import "./Products.scss";
import {
  Card,
  CardBody,
  CardFooter,
  Text,
  TextVariants,
} from "@patternfly/react-core";

import { NavLink } from "react-router-dom";

function Products(products) {
  return (
    <div className="products-container">
      {products &&
        products?.products?.map((product) => {
          return (
            <NavLink
              to={`/product/${product.id}`}
              style={{ textDecoration: "none" }}
              key={product.id}
            >
              <Card ouiaId="BasicCard">
                <CardBody>
                  <img src={product.image} alt="productimage" className="card-image" />
                </CardBody>
                <CardFooter>
                  <div className="product-name-cost">
                    <Text component={TextVariants.h2}>{product.name}</Text>
                    <Text component={TextVariants.p}>₿ {product.id}</Text>
                  </div>

                  <div>
                    <Text component={TextVariants.p}>
                      status: &nbsp; &nbsp;
                      {product.status === "Dead" && (
                        <span style={{ color: "red" }}>{product.status}</span>
                      )}
                      {product.status === "Alive" && (
                        <span style={{ color: "green" }}>{product.status}</span>
                      )}
                      {product.status === "unknown" && (
                        <span style={{ color: "gray" }}>{product.status}</span>
                      )}
                    </Text>
                  </div>
                </CardFooter>
              </Card>
            </NavLink>
          );
        })}
    </div>
  );
}

export default Products;
