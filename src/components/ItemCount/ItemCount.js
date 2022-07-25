import { useState } from "react";
import "./itemCount.css";

const ItemCount = ({ addProduct,stock}) => {

  const [count, setCount] = useState(0);

  const increase = () => {
    count < stock && setCount(count + 1);
  };
  const decrease = () => {
    count > 0 && setCount(count - 1);
  };

  return (
    <div className="itemCountContainer">
      <div className="buttonCountContainer">
        <button onClick={decrease} disabled={count === 0}>
          -
        </button>
        <span>{count}</span>
        <button onClick={increase} disabled={count === stock}>
          +
        </button>
      </div>
      <button
        disabled={count === 0 ? true : null}
        onClick={() => addProduct(count)}
        className="addToCart"
      >
        Add to cart
      </button>
    </div>
  );
};

export default ItemCount;
