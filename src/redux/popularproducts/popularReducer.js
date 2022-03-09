import {
  POPULAR_PRODUCTS_FAILED,
  POPULAR_PRODUCTS_SUCCESS,
} from './popularTypes';

const initialState = {
  error: null,
  popularProducts: [],
};

export const popularProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPULAR_PRODUCTS_SUCCESS:
      return {
        ...state,
        popularProducts: action.payload,
      };
    case POPULAR_PRODUCTS_FAILED:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
