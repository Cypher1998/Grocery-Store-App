import { TOGGLE_CART_MODAL } from './cartModalTypes';

export const toggleCartModal = () => (dispatch) => {
  dispatch({ type: TOGGLE_CART_MODAL });
};
