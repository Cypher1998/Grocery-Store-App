import {
  FETCHING_SINGLE_PRODUCT,
  FETCHING_SINGLE_PRODUCT_FAILED,
  FETCHING_SINGLE_PRODUCT_SUCCESS,
} from './fetchSingleProductTypes';

const initialState = {
  loading: false,
  error: null,
  singleProduct: null,
  relatedProducts: null,
};

export const fetchSIngleProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SINGLE_PRODUCT:
      return {
        loading: true,
        error: null,
        singleProduct: null,
        relatedProducts: null,
      };

    case FETCHING_SINGLE_PRODUCT_SUCCESS:
      return {
        singleProduct: action.payload.newSingleProduct,
        relatedProducts: action.payload.relatedProducts,
        loading: false,
        error: null,
      };

    case FETCHING_SINGLE_PRODUCT_FAILED:
      return {
        loading: false,
        error: action.payload,
        singleProduct: null,
        relatedProducts: null,
      };
    default:
      return state;
  }
};
