import {
  FETCHING_SEARCH_QUERY,
  SEARCH_QUERY_FETCHING_SUCCESS,
  SEARCH_QUERY_FETCHING_FAILED,
  LOW_PRICE_FIRST_SEARCH,
  HIGH_PRICE_FIRST_SEARCH,
  LOAD_SEARCH_PRODUCTS_MORE,
  initialLimit,
  nextLimit,
} from './searchQueryTypes';

const initialState = {
  loading: false,
  error: null,
  searchProducts: null,
  slicedSearchProducts: null,
  showMore: true,
  index: initialLimit,
};

export const searchQueryProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SEARCH_QUERY:
      return {
        ...state,
        loading: true,
        error: null,
        searchProducts: null,
        slicedSearchProducts: null,
      };

    case SEARCH_QUERY_FETCHING_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        searchProducts: action.payload.searchQueryProducts,
        slicedSearchProducts: action.payload.slicedSearchProducts,
        showMore: true,
      };

    case SEARCH_QUERY_FETCHING_FAILED:
      return {
        ...state,
        loading: false,
        error: 'failed to fetch',
        searchProducts: null,
        slicedSearchProducts: null,
      };

    case HIGH_PRICE_FIRST_SEARCH:
      return {
        ...state,
        slicedSearchProducts: [
          ...state.slicedSearchProducts?.sort(
            (productA, productB) => productB.price - productA.price
          ),
        ],
      };

    case LOW_PRICE_FIRST_SEARCH:
      return {
        ...state,
        slicedSearchProducts: [
          ...state.slicedSearchProducts?.sort(
            (productA, productB) => productA.price - productB.price
          ),
        ],
      };

    case LOAD_SEARCH_PRODUCTS_MORE:
      const newIndex = state.index + nextLimit;

      const newShowMore = newIndex < state.searchProducts?.length;

      const newList = [
        ...state.slicedSearchProducts,
        ...state.searchProducts?.slice(state.index, newIndex),
      ];

      return {
        ...state,
        showMore: newShowMore,
        index: newShowMore === false ? initialLimit : newIndex,
        slicedSearchProducts: newList,
      };

    default:
      return state;
  }
};
