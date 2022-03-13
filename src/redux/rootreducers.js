import { combineReducers } from 'redux';
import { featuresReducer } from './featuredcategory/featureReducer';
import { popularProductsReducer } from './popularproducts/popularReducer';
import { discountProductsReducer } from './discountproducts/discountReducer';

const rootReducer = combineReducers({
  features: featuresReducer,
  popularProducts: popularProductsReducer,
  discountProducts: discountProductsReducer,
});

export default rootReducer;
