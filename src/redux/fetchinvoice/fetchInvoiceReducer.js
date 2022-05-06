import {
  FETCHING_INVOICE,
  FETCHING_INVOICE_FAILED,
  FETCHING_INVOICE_SUCCESS,
} from './fetchInvoiceTypes';

const initialState = {
  loading: false,
  invoice: null,
  error: null,
};

export const fetchInvoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_INVOICE:
      return {
        loading: true,
        invoice: null,
        error: null,
      };

    case FETCHING_INVOICE_SUCCESS:
      return {
        loading: false,
        invoice: action.payload,
        error: null,
      };

    case FETCHING_INVOICE_FAILED:
      return {
        ...state,
        error: 'failed to fetch',
        loading: false,
        invoice: null,
      };

    default:
      return state;
  }
};
