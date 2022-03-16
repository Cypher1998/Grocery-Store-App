import {
  DISCOUNT_PRODUCTS_FAILED,
  DISCOUNT_PRODUCTS_FETCH,
  DISCOUNT_PRODUCTS_SUCCESS,
} from './discountTypes';
import { db } from '../../firebase.config';
import {
  collection,
  query,
  where,
  getDocs,
  limit,
  orderBy,
} from 'firebase/firestore';

export const fetchDiscountedProducts = () => async (dispatch) => {
  dispatch({ type: DISCOUNT_PRODUCTS_FETCH });
  try {
    // get reference
    const productsRef = collection(db, 'products');

    // create query
    const q = query(productsRef, where('discount', '!=', false), limit(18));

    // execute query
    const querySnap = await getDocs(q);

    let discountProducts = [];
    if (querySnap._snapshot.docChanges.length === 0) {
      throw new Error();
    } else {
      querySnap.forEach((doc) => {
        return discountProducts.push(doc.data());
      });

      dispatch({ type: DISCOUNT_PRODUCTS_SUCCESS, payload: discountProducts });
    }
  } catch (error) {
    dispatch({
      type: DISCOUNT_PRODUCTS_FAILED,
      payload: 'no discounted products yet',
    });
  }
};
