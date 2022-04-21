import { combineReducers } from 'redux';
import { featuresReducer } from './featuredcategory/featureReducer';
import { popularProductsReducer } from './popularproducts/popularReducer';
import { discountProductsReducer } from './discountproducts/discountReducer';
import { modalReducer } from './closemodal/closeModalReducer';
import { getAuthUserReducer } from './getauthuser/getAuthUserReducer';
import { toggleForgotPasswordReducer } from './toggleForgetPass/toggleForgetPdReducer';
import { categoryProductsReducer } from './fetchcategoryproducts/fetchCategoryProductsReducer';
import { searchQueryProductsReducer } from './searchqueryproducts/searchQueryReducer';
import { fetchSIngleProductReducer } from './fetchsingleproduct/fetchSingleProductReducer';
import { toggleCartModalReducer } from './cartmodal/cartModalReducer';
import { cartProductsReducer } from './cartproducts/cartProductsReducer';

const rootReducer = combineReducers({
  features: featuresReducer,
  popularProducts: popularProductsReducer,
  discountProducts: discountProductsReducer,
  modal: modalReducer,
  getAuthUser: getAuthUserReducer,
  forgotPasswordModal: toggleForgotPasswordReducer,
  categoryProducts: categoryProductsReducer,
  searchQueryProducts: searchQueryProductsReducer,
  singleProductFetched: fetchSIngleProductReducer,
  toggleCartModal: toggleCartModalReducer,
  cartProducts: cartProductsReducer,
});

export default rootReducer;
