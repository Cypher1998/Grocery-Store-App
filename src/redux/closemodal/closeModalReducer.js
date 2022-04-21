import {
  MOBILE_MODAL_OPEN,
  MOBILE_MODAL_CLOSE,
  DESKTOP_CATEGORY_MODAL_CLOSE,
  DESKTOP_PAGE_MODAL_CLOSE,
} from './closeModalTypes';

const initialState = {
  mobileModal: false,
  desktopCategoryModal: false,
  desktopPageModal: false,
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOBILE_MODAL_OPEN:
      return {
        ...state,
        mobileModal: true,
      };
    case MOBILE_MODAL_CLOSE:
      return {
        ...state,
        mobileModal: false,
      };
    case DESKTOP_CATEGORY_MODAL_CLOSE:
      return {
        ...state,
        desktopCategoryModal: !state.desktopCategoryModal,
        desktopPageModal: false,
      };
    case DESKTOP_PAGE_MODAL_CLOSE:
      return {
        ...state,
        desktopPageModal: !state.desktopPageModal,
        desktopCategoryModal: false,
      };

    default:
      return state;
  }
};
