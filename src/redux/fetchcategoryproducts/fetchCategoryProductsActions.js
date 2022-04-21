import {
  FETCHING_CATEGORY_PRODUCTS,
  FETCHING_CATEGORY_PRODUCTS_FAILED,
  FETCHING_CATEGORY_PRODUCTS_SUCCCESS,
  LOW_PRICE_FIRST,
  HIGH_PRICE_FIRST,
  LOAD_MORE,
  initialLimit,
} from './fetchCategoryProductsTypes';
import { query, collection, getDocs, where, orderBy } from 'firebase/firestore';
import { db } from '../../firebase.config';

export const fetchCategoryProducts = (category, text) => async (dispatch) => {
  dispatch({ type: FETCHING_CATEGORY_PRODUCTS });
  try {
    const mainCategoryProductsRef = collection(db, 'products');
    const qry = query(
      mainCategoryProductsRef,
      where(category, '>', ''),
      orderBy(category, 'asc'),
      orderBy('id', 'asc')
    );
    const querySnap = await getDocs(qry);
    let categoryProducts = [];
    if (querySnap._snapshot.docChanges.length === 0) {
      throw new Error();
    } else {
      querySnap.forEach((doc) => {
        return categoryProducts.push(doc.data());
      });

      if (category === 'maincategory') {
        const fetchedCategoryProducts = categoryProducts?.filter(
          (product) => product.maincategory === text
        );

        const slicedCategoryProducts = categoryProducts
          ?.filter((product) => product.maincategory === text)
          .slice(0, initialLimit);

        dispatch({
          type: FETCHING_CATEGORY_PRODUCTS_SUCCCESS,
          payload: { fetchedCategoryProducts, slicedCategoryProducts },
        });
      } else if (category === 'subcategory') {
        const fetchedCategoryProducts = categoryProducts?.filter(
          (product) => product.subcategory === text
        );

        const slicedCategoryProducts = categoryProducts
          ?.filter((product) => product.subcategory === text)
          .slice(0, initialLimit);

        dispatch({
          type: FETCHING_CATEGORY_PRODUCTS_SUCCCESS,
          payload: { fetchedCategoryProducts, slicedCategoryProducts },
        });
      }
    }
  } catch (error) {
    dispatch({
      type: FETCHING_CATEGORY_PRODUCTS_FAILED,
      payload: 'fetching failed',
    });
  }
};

export const lowPriceProductsFirst = () => (dispatch) => {
  dispatch({ type: LOW_PRICE_FIRST });
};

export const highPriceProductsFirst = () => (dispatch) => {
  dispatch({ type: HIGH_PRICE_FIRST });
};

export const fetchMore = () => (dispatch) => {
  dispatch({ type: LOAD_MORE });
};
