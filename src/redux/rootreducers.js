import { combineReducers } from 'redux';
import { featuresReducer } from './featuredcategory/featureReducer';
import { popularProductsReducer } from './popularproducts/popularReducer';
import { discountProductsReducer } from './discountproducts/discountReducer';
import { modalReducer } from './closemodal/closeModalReducer';

const rootReducer = combineReducers({
  features: featuresReducer,
  popularProducts: popularProductsReducer,
  discountProducts: discountProductsReducer,
  modal: modalReducer,
});

export default rootReducer;
