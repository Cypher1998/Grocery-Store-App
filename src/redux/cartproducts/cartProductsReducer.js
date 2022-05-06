import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  DECREASE_QUANTITY,
  EMPTY_CART_CONTENT,
} from './cartProductsTypes';

const initialState = {
  // cart: localStorage.getItem('cart')
  //   ? JSON.parse(localStorage.getItem('cart'))
  //   : [],
  cart: [],
};

export const cartProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      let foundItem = state.cart?.find(
        ({ id }) => id === action.payload.item.id
      );

      if (foundItem) {
        return {
          cart: state.cart?.map((item) =>
            item.id === action.payload.item.id
              ? {
                  ...item,
                  count: item.count + action.payload.numOfItemPurchased,
                }
              : item
          ),
        };
      }
      const newItem = {
        ...action.payload.item,
        count: action.payload.numOfItemPurchased,
      };
      return {
        cart: [...state.cart, newItem],
      };

    case DECREASE_QUANTITY:
      const foundItemInCart = state.cart?.find(
        ({ id }) => id === action.payload
      );

      if (foundItemInCart && foundItemInCart.count > 1) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload
              ? { ...item, count: item.count - 1 }
              : item
          ),
        };
      }

      let newCart = [...state.cart];

      newCart.map((cartItem, index) => {
        if (cartItem.id === action.payload) {
          newCart.splice(index, 1);
          return newCart;
        }
      });

      return { cart: newCart.length ? newCart : [] };

    case REMOVE_PRODUCT:
      return {
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case EMPTY_CART_CONTENT:
      return {
        cart: [],
      };

    default:
      return state;
  }
};
