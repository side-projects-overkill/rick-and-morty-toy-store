import "./ProductView.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addToCart } from "../redux_api/actions/cartActions";

function ProductView({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = product;

  const addToItemCart = () => {
    dispatch(addToCart(id, 1));
    navigate("/cart");
  };

  const buyNow = () => {
    dispatch(addToCart(id, 1));
    navigate("/address");
  };

  return (
    <div className="productinfo-main-container">
      <div className="productinfo-left-container">
        <img src={product.image} alt="nothing" />
      </div>
      <div className="productinfo-right-container">
        <h3>{product.name}</h3>
        <p className="productview-price">₿ {product.id}</p>
        <table>
          <tbody>
            <tr aria-rowspan={2}>
              <td>Toy Species:</td>
              <td>
                <strong>{product.species}</strong>
              </td>
            </tr>
            <tr>
              <td>Gender Of Toy:</td>
              <td>
                <strong>{product.gender}</strong>{" "}
              </td>
            </tr>
            <tr className="productview-color-row">
              <td>Color:</td>
              <td>
                <input type="radio" name="toycolor" /> <span>Red</span>{" "}
              </td>
              <td>
                <input type="radio" name="toycolor" /> <span>Green</span>{" "}
              </td>
              <td>
                <input type="radio" name="toycolor" /> <span>Yellow</span>{" "}
              </td>
            </tr>
            <tr className="productview-size-row">
              <td>Size:</td>
              <td>
                <input type="radio" name="toysize" /> <span>Small</span>
              </td>
              <td>
                <input type="radio" name="toysize" /> <span>Medium</span>
              </td>
              <td>
                <input type="radio" name="toysize" /> <span>Large</span>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="product-button-group">
          <button className="buy-now-btn" onClick={buyNow}>
            Buy Now
          </button>
          <button className="add-to-cart-btn" onClick={addToItemCart}>
            Add To cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductView;
