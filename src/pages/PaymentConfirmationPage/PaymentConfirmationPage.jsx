import "./PaymentConfirmationPage.scss";
import { Button } from "@patternfly/react-core";
import { useNavigate } from "react-router-dom";

function PaymentConfirmationPage() {
  const navigate = useNavigate();
  return (
    <div className="order-comfirm-main-continaer">
      <div className="order-confirm-container">
        <h1 className="order-confirm-heading">Order Confirmation</h1>
        <p className="order-confirm-text">
          We know you can't wait to receive your order!{" "}
        </p>
        <p className="order-confirm-text">
          Our team is working hard to ensure quick delivery while maintaining
          all safety protocols.
        </p>
        <Button
          onClick={() => navigate("/")}
          variant="primary"
          ouiaId="Primary"
          className="continue-shopping-btn"
        >
          Continue Shopping
        </Button>
      </div>
    </div>
  );
}

export default PaymentConfirmationPage;
