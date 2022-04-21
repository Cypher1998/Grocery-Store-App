import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  DECREASE_QUANTITY,
} from './cartProductsTypes';

export const addProductToCart = (item, numOfItemPurchased) => (dispatch) => {
  // console.log(item, numOfItemPurchased);
  dispatch({
    type: ADD_PRODUCT,
    payload: { item, numOfItemPurchased },
  });
};

export const removeProductFromCart = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_PRODUCT,
    payload: id,
  });
};

export const decreaseProductQuantity = (id) => (dispatch) => {
  dispatch({
    type: DECREASE_QUANTITY,
    payload: id,
  });
};
