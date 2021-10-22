export const initialState = {
    cart: [],
    user: null
};

// get cart total by adding up (price * quantity) for alll the items in the car
export const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => item.price * item.quantity + amount, 0);

// update the cart based on the specified action
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            {
                // get index of the item in the cart
                const index = state.cart.findIndex((cartItem) => cartItem.id === action.item.id);

                // if the item is not in the cart, add it
                if (index < 0) {
                    return {
                        ...state, cart: [...state.cart, action.item]
                    };
                }
                else  // if it's already in the cart, increase its quantity by 1.
                {
                     // copy the cart to a new cart
                    let newCart = [...state.cart];
                    
                    // create a new item with the updated quantity
                    // and repalce the existing item with the new item
                    let itemToAdd = action.item;
                    itemToAdd.quantity = newCart[index].quantity + 1;
                    newCart.splice(index, 1, itemToAdd);

                    // return the new cart
                    return { ...state , cart: newCart};
                }
            }
        case "REMOVE_FROM_CART":
            {
                // copy the cart to a new cart
                let newCart = [...state.cart];

                // find the item based on id
                const index = newCart.findIndex(
                    (cartItem) => cartItem.id === action.id
                );

                // if found, remove the item from the new cart
                if (index >= 0) {
                    newCart.splice(index, 1);
                }

                // return the new cart
                return { ...state, cart: newCart }
            }
        case "SET_USER":
            return { ...state, user: action.user }
        default:
            return state;
    }
};

export default reducer;