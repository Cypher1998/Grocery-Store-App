import {
  FETCHING_SEARCH_QUERY,
  SEARCH_QUERY_FETCHING_SUCCESS,
  SEARCH_QUERY_FETCHING_FAILED,
  LOW_PRICE_FIRST_SEARCH,
  HIGH_PRICE_FIRST_SEARCH,
  LOAD_SEARCH_PRODUCTS_MORE,
  initialLimit,
} from './searchQueryTypes';
import { db } from '../../firebase.config';
import { query, where, collection, orderBy, getDocs } from 'firebase/firestore';

export const fetchSearchQueryProducts = (searchText) => async (dispatch) => {
  dispatch({ type: FETCHING_SEARCH_QUERY });
  try {
    const searchProductsRef = collection(db, 'products');
    const qry = query(
      searchProductsRef,
      where('maincategory', '>', ''),
      orderBy('maincategory', 'asc'),
      orderBy('id', 'asc')
    );
    const querySnap = await getDocs(qry);

    // let searchQueryProducts = [];
    let allProducts = [];
    if (querySnap._snapshot.docChanges.length === 0) {
      throw new Error();
    } else {
      querySnap.forEach((doc) => {
        return allProducts.push(doc.data());
      });
      const searchQueryProducts = allProducts.filter((product) =>
        product.details.includes(searchText)
      );

      const slicedSearchProducts = searchQueryProducts.slice(0, initialLimit);

      dispatch({
        type: SEARCH_QUERY_FETCHING_SUCCESS,
        payload: { searchQueryProducts, slicedSearchProducts },
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: SEARCH_QUERY_FETCHING_FAILED });
  }
};

export const lowPriceProductsFirst = () => (dispatch) => {
  dispatch({ type: LOW_PRICE_FIRST_SEARCH });
};

export const highPriceProductsFirst = () => (dispatch) => {
  dispatch({ type: HIGH_PRICE_FIRST_SEARCH });
};

export const fetchMore = () => (dispatch) => {
  dispatch({ type: LOAD_SEARCH_PRODUCTS_MORE });
};
