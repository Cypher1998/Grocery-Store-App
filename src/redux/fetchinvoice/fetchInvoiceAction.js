import {
  FETCHING_INVOICE,
  FETCHING_INVOICE_FAILED,
  FETCHING_INVOICE_SUCCESS,
} from './fetchInvoiceTypes';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase.config';

export const fetchInvoice = (order_id) => async (dispatch) => {
  dispatch({ type: FETCHING_INVOICE });
  try {
    const invoiceRef = doc(db, 'orders', order_id);
    const docSnap = await getDoc(invoiceRef);
    if (docSnap.exists()) {
      dispatch({ type: FETCHING_INVOICE_SUCCESS, payload: docSnap.data() });
    } else {
      dispatch({ type: FETCHING_INVOICE_SUCCESS, payload: {} });
    }
  } catch (error) {
    dispatch({ type: FETCHING_INVOICE_FAILED });
  }
};
