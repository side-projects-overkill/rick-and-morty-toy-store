import "./Home.scss";
import { Text, TextVariants } from "@patternfly/react-core";
import InfoSlider from "../../components/Infoslider/InfoSlider";
import Products from "../../components/Products/Products";
import CategorySlider from "../../components/categoryslider/CategorySlider";
import ActivePill from "../../components/activePill/ActivePill";
import { useProductContext } from "../../contexts/ProductContext";

function Home() {
  const { products } = useProductContext();
  return (
    <div>
      {products && (
        <div className="home-main-container">
          <InfoSlider products={products?.slice(0, 4)} />
          <CategorySlider products={products?.slice(4, 8)} />
          <div>
            <Text component={TextVariants.h1} className="delivery-heading">
              Want delivery today?
            </Text>
            <div className="delivery-container">
              <ActivePill content="All" isActive={true} />
              {products?.slice(0, 9).map((product) => {
                return (
                  <ActivePill content={product?.name} key={product?.id} isActive={false}/>
                );
              })}
            </div>
          </div>
          <Products products={products?.slice(8, 12)} />
          <Products products={products?.slice(15, 19)} />
        </div>
      )}
    </div>
  );
}

export default Home;