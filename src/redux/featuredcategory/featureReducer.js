import {
  FETCH_REQUEST,
  FETCH_REQUEST_SUCCESS,
  FETCH_REQUEST_FAILED,
} from './featureTypes';

const initialState = {
  loading: false,
  featuresData: null,
  error: null,
};

export const featuresReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        loading: true,
        featuresData: null,
        error: null,
      };
    case FETCH_REQUEST_SUCCESS:
      return {
        ...state,
        featuresData: action.payload,
        loading: false,
      };
    case FETCH_REQUEST_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
