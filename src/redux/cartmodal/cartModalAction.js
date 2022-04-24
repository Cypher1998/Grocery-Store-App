import { TOGGLE_CART_MODAL, REMOVE_CART_MODAL } from './cartModalTypes';

export const toggleCartModal = () => (dispatch) => {
  dispatch({ type: TOGGLE_CART_MODAL });
};

export const removeCartModal = () => (dispatch) => {
  dispatch({ type: REMOVE_CART_MODAL });
};
