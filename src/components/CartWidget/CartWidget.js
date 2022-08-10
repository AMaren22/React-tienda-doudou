import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";

import "./cartwidget.css";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const {getQuantityCart} = useContext(CartContext)
  const quantity = getQuantityCart()
  return (
    <Link to='/cart' className="cart-container">
      <FontAwesomeIcon icon={faCartShopping} className="cart" />
      <div className="unit-container">
        <span>{quantity}</span>
      </div>
    </Link>
  );
};

export default CartWidget;
