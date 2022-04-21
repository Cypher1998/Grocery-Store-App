import {
  DESKTOP_CATEGORY_MODAL_CLOSE,
  DESKTOP_PAGE_MODAL_CLOSE,
  MOBILE_MODAL_CLOSE,
  MOBILE_MODAL_OPEN,
} from './closeModalTypes';

export const toggleDesktopCategoryModal = () => (dispatch) => {
  dispatch({ type: DESKTOP_CATEGORY_MODAL_CLOSE });
};

export const openMobileModal = () => (dispatch) => {
  dispatch({ type: MOBILE_MODAL_OPEN });
};

export const closeMobileModal = () => (dispatch) => {
  dispatch({ type: MOBILE_MODAL_CLOSE });
};

export const toggleDesktopPageModal = () => (dispatch) => {
  dispatch({ type: DESKTOP_PAGE_MODAL_CLOSE });
};
