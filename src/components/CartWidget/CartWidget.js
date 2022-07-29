import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


import "./cartwidget.css";

const CartWidget = () => {
  return (
    <div className="cart-container">
      <FontAwesomeIcon icon={faCartShopping} className="cart" />
      <div className="unit-container">
        <span>0</span>
      </div>
    </div>
  );
};

export default CartWidget;
