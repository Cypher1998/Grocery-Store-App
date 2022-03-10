import {
  POPULAR_PRODUCTS_FETCH,
  POPULAR_PRODUCTS_FAILED,
  POPULAR_PRODUCTS_SUCCESS,
} from './popularTypes';
import { db } from '../../firebase.config';
import {
  collection,
  query,
  where,
  getDocs,
  limit,
  orderBy,
} from 'firebase/firestore';

export const fetchPopularProducts = () => async (dispatch) => {
  dispatch({ type: POPULAR_PRODUCTS_FETCH });
  try {
    // get reference
    const productsRef = collection(db, 'products');

    // create query
    const q = query(
      productsRef,
      where('popular', '==', true),
      orderBy('id', 'desc'),
      limit(18)
    );

    // execute query
    const querySnap = await getDocs(q);
    let popularProducts = [];
    if (querySnap._snapshot.docChanges.length === 0) {
      throw new Error();
    } else {
      querySnap.forEach((doc) => {
        return popularProducts.push(doc.data());
      });

      dispatch({ type: POPULAR_PRODUCTS_SUCCESS, payload: popularProducts });
    }
  } catch (error) {
    dispatch({
      type: POPULAR_PRODUCTS_FAILED,
      payload: 'no popular products yet',
    });
  }
};
