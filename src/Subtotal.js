import React from "react"
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateManager";
import { getCartTotal } from "./reducer";

function Subtotal() {
  // get the current cart and the dispatch function from StateManager
  const [{ cart }, dispatch] = useStateValue();

  // get the number of items by adding up the quantities
  const numOfItems = cart.map(cartItem => cartItem.quantity).reduce((sum, current) => sum + current, 0);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal {numOfItems}(items): <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className="checkoutButton">Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;


