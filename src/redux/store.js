import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import rootReducer from './rootreducers';

const persistConfig = {
	key: 'grocery-cart',
	storage,
	whitelist: ['cartProducts'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
	persistedReducer,
	{},
	composeWithDevTools(applyMiddleware(thunk))
);

export const persistedStore = persistStore(store);
export default store;
