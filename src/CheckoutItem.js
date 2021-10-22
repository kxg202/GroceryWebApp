import React from "react";
import "./CheckoutItem.css";
import { useStateValue } from "./StateManager"

function CheckoutItem({ id, name, image, price, quantity }) {
  // get the current cart and dispatch function from StateManager
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    // tell StateManager to remove the specified cart item
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    })
  }

  return (
    <div className="checkoutItem">
      <div className="checkoutItem__info">
      <img className="checkoutItem__image" src={image} />
      <p className="checkoutItem__name">{name}</p>
      </div>
      <div className="checkoutItem__info">
        <p className="checkoutItem__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="checkoutItem__quantity">Qty: {quantity}</p>
        <button onClick={removeFromCart}>Remove from Cart</button>
      </div>
    </div>
  );
}

export default CheckoutItem;
