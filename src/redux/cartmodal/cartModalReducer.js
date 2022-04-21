import { TOGGLE_CART_MODAL } from './cartModalTypes';

const initialState = false;

export const toggleCartModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART_MODAL:
      return !state;

    default:
      return state;
  }
};
