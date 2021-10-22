import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutItem from "./CheckoutItem"
import { useStateValue } from "./StateManager"

function Checkout() {
  // get the cart from StateManager for rendering  
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          <h3>Hello, {user? user.email:"Guest"}</h3>
          <h2 className="checkout__title">Your Shopping Cart</h2>
          {cart.map(item => (
            <CheckoutItem
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
