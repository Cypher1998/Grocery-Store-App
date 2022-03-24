import { combineReducers } from 'redux';
import { featuresReducer } from './featuredcategory/featureReducer';
import { popularProductsReducer } from './popularproducts/popularReducer';
import { discountProductsReducer } from './discountproducts/discountReducer';
import { modalReducer } from './closemodal/closeModalReducer';
import { getAuthUserReducer } from './getauthuser/getAuthUserReducer';
import { toggleForgotPasswordReducer } from './toggleForgetPass/toggleForgetPdReducer';

const rootReducer = combineReducers({
  features: featuresReducer,
  popularProducts: popularProductsReducer,
  discountProducts: discountProductsReducer,
  modal: modalReducer,
  getAuthUser: getAuthUserReducer,
  forgotPasswordModal: toggleForgotPasswordReducer,
});

export default rootReducer;
