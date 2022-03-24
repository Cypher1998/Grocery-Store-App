const initialState = {
  visible: false,
};

export const toggleForgotPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_FORGOT_PASSWORD_MODAL':
      return {
        visible: !state.visible,
      };

    default:
      return state;
  }
};
