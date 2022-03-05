import { combineReducers } from 'redux';
import { featuresReducer } from './featuredcategory/featureReducer';

const rootReducer = combineReducers({
  features: featuresReducer,
});

export default rootReducer;
