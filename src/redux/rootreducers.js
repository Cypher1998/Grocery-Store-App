import { combineReducers } from 'redux';
import { featuresReducer } from './featuredcategory/featureReducer';
import { popularProductsReducer } from './popularproducts/popularReducer';

const rootReducer = combineReducers({
  features: featuresReducer,
  popularProducts: popularProductsReducer,
});

export default rootReducer;
