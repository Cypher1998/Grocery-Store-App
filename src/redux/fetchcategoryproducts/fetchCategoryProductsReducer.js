import {
  FETCHING_CATEGORY_PRODUCTS,
  FETCHING_CATEGORY_PRODUCTS_FAILED,
  FETCHING_CATEGORY_PRODUCTS_SUCCCESS,
  LOW_PRICE_FIRST,
  HIGH_PRICE_FIRST,
  LOAD_MORE,
  initialLimit,
  nextLimit,
} from './fetchCategoryProductsTypes';

const initialState = {
  loading: false,
  error: null,
  fetchedCategoryProducts: null,
  slicedCategoryProducts: null,
  showMore: true,
  index: initialLimit,
};

export const categoryProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CATEGORY_PRODUCTS:
      return {
        ...state,
        loading: true,
        error: null,
        fetchedCategoryProducts: null,
        slicedCategoryProducts: null,
      };

    case FETCHING_CATEGORY_PRODUCTS_SUCCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        fetchedCategoryProducts: action.payload.fetchedCategoryProducts,
        slicedCategoryProducts: action.payload.slicedCategoryProducts,
        showMore: true,
      };

    case FETCHING_CATEGORY_PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
        fetchedCategoryProducts: null,
        slicedCategoryProducts: null,
      };

    case HIGH_PRICE_FIRST:
      return {
        ...state,
        slicedCategoryProducts: [
          ...state.slicedCategoryProducts?.sort(
            (productA, productB) => productB.price - productA.price
          ),
        ],
      };

    case LOW_PRICE_FIRST:
      return {
        ...state,
        slicedCategoryProducts: [
          ...state.slicedCategoryProducts.sort(
            (productA, productB) => productA.price - productB.price
          ),
        ],
      };

    case LOAD_MORE:
      const newIndex = state.index + nextLimit;

      const newShowMore = newIndex < state.fetchedCategoryProducts?.length;

      const newList = [
        ...state.slicedCategoryProducts,
        ...state.fetchedCategoryProducts.slice(state.index, newIndex),
      ];

      return {
        ...state,
        showMore: newShowMore,
        index: newShowMore === false ? initialLimit : newIndex,
        slicedCategoryProducts: newList,
      };

    default:
      return state;
  }
};
