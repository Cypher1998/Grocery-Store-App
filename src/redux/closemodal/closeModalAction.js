import { DESKTOP_CATEGORY_MODAL, DESKTOP_PAGE_MODAL } from './closeModalTypes';

export const categoryModal = () => (dispatch) => {
  dispatch({ type: DESKTOP_CATEGORY_MODAL });
};

export const PageModal = () => (dispatch) => {
  dispatch({ type: DESKTOP_PAGE_MODAL });
};
