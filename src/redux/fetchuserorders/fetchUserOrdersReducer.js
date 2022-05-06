import {
  FETCH_ALL_USER_ORDERS,
  FETCH_ALL_USER_ORDERS_FAILED,
  FETCH_ALL_USER_ORDERS_SUCCESS,
} from './fetchUserOrdersTypes';

const initialState = {
  loading: false,
  allUserOrders: null,
  statusPending: null,
  statusProcessing: null,
  statusCompleted: null,
  error: null,
};

export const fetchAllUserOrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_USER_ORDERS:
      return {
        allUserOrders: null,
        error: null,
        loading: true,
        statusPending: null,
        statusProcessing: null,
        statusCompleted: null,
      };

    case FETCH_ALL_USER_ORDERS_SUCCESS:
      const pending = action.payload.filter((order) => {
        return order.status === 'pending';
      });

      const processing = action.payload.filter((order) => {
        return order.status === 'processing';
      });

      const completed = action.payload.filter((order) => {
        return order.status === 'completed';
      });

      return {
        loading: false,
        allUserOrders: action.payload,
        statusPending: pending,
        statusProcessing: processing,
        statusCompleted: completed,
        error: null,
      };

    case FETCH_ALL_USER_ORDERS_FAILED:
      return {
        loading: false,
        error: action.payload,
        allUserOrders: null,
        statusPending: null,
        statusProcessing: null,
        statusCompleted: null,
      };

    default:
      return state;
  }
};
