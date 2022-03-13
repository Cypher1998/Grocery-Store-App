import {
  DISCOUNT_PRODUCTS_FAILED,
  DISCOUNT_PRODUCTS_FETCH,
  DISCOUNT_PRODUCTS_SUCCESS,
} from './discountTypes';

const initialState = {
  loading: false,
  error: null,
  discountProducts: null,
};

export const discountProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISCOUNT_PRODUCTS_FETCH:
      return {
        loading: true,
        error: null,
        discountProducts: null,
      };
    case DISCOUNT_PRODUCTS_SUCCESS:
      return {
        ...state,
        discountProducts: action.payload,
        loading: false,
      };
    case DISCOUNT_PRODUCTS_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
