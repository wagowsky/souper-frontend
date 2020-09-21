import * as types from '../actions/types';

export const cartReducer = (state = { cart: [] }, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
            const fetchedItem = action.payload;
      const product = state.cart.find(
        (item) => item.product === fetchedItem.productID
      );
      if (product) {
        return {
        cart: state.cart.map((item) =>
            item.product === product.product ? fetchedItem : item
          ),
        };
      } else {
        return { cart: [...state.cart, fetchedItem] };
      }

    case types.REMOVE_FROM_CART:
      return {
            cart: state.cart.filter((item) => item.productID !== action.payload),
      };

    default:
      return state;
  }
};
