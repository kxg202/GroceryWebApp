import React from "react";
import "./Item.css";
import { useStateValue } from "./StateManager";

// render a grocery item for purchase
function Item({ id, name, price, image }) {
    // get the cart and dispatch function from StateManager
    const [{ cart }, dispatch] = useStateValue();

    // add the item to the cart
    const addToCart = () => {
        // tell StateManager to add it to the cart
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id: id,
                name: name,
                image: image,
                price: price,
                quantity: 1
            }
        });
    }

    return (
        <div className="item">
            <div className="item__info">
                <p>{name}</p>
                <p className="item__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            </div>
            <img src={image} alt="" />
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Item;
