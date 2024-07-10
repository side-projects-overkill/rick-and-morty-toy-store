import "./CategorySlider.scss";
import { Text, TextVariants } from "@patternfly/react-core";

function CategorySlider(products) {
  return (
    <div className="categoryslider-main-container">
      {products &&
        products?.products?.map((product) => {
          return (
            <div key={product.id}>
              <img src={product.image} alt="porductimage" />
              <Text component={TextVariants.h2}>{product?.species}</Text>
            </div>
          );
        })}
    </div>
  );
}

export default CategorySlider;
