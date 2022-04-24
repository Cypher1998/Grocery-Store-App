import { TOGGLE_CART_MODAL, REMOVE_CART_MODAL } from './cartModalTypes';

const initialState = false;

export const toggleCartModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART_MODAL:
      return !state;

    case REMOVE_CART_MODAL:
      return initialState;

    default:
      return state;
  }
};
