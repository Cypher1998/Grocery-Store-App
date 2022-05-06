const initialState = {
  loading: false,
  user: null,
  error: null,
};

export const getAuthUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_USER':
      return {
        user: null,
        error: null,
        loading: true,
      };
    case 'FETCH_COMPLETE':
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_FAILED':
      return {
        error: action.payload,
        loading: false,
        user: null,
      };

    default:
      return state;
  }
};
