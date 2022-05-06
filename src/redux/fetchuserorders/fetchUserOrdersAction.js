import {
  FETCH_ALL_USER_ORDERS,
  FETCH_ALL_USER_ORDERS_SUCCESS,
  FETCH_ALL_USER_ORDERS_FAILED,
} from './fetchUserOrdersTypes';
import { where, query, getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase.config';

export const fetchAllUserOrders = (userUid) => async (dispatch) => {
  dispatch({ type: FETCH_ALL_USER_ORDERS });

  try {
    const allOrdersRef = collection(db, 'orders');

    const qry = query(allOrdersRef, where('userUid', '==', userUid));

    const querySnap = await getDocs(qry);
 
    if(querySnap.metadata.fromCache){
      throw new Error()
    }

    let allUserOrders = [];
    querySnap.forEach((doc) => {
      return allUserOrders.push(doc.data());
    });

    dispatch({ type: FETCH_ALL_USER_ORDERS_SUCCESS, payload: allUserOrders });
   
  } catch (error) {
    dispatch({
      type: FETCH_ALL_USER_ORDERS_FAILED,
      payload: 'Orders fetching failed. Network Error!',
    });
  }
};
