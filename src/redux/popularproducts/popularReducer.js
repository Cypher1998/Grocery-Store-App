import {
  POPULAR_PRODUCTS_FETCH,
  POPULAR_PRODUCTS_FAILED,
  POPULAR_PRODUCTS_SUCCESS,
} from './popularTypes';

const initialState = {
  loading: false,
  error: null,
  popularProducts: null,
};

export const popularProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPULAR_PRODUCTS_FETCH:
      return {
        loading: true,
        error: null,
        popularProducts: null,
      };
    case POPULAR_PRODUCTS_SUCCESS:
      return {
        ...state,
        popularProducts: action.payload,
        loading: false,
      };
    case POPULAR_PRODUCTS_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
