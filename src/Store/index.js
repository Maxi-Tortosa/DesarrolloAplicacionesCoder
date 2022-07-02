import { combineReducers, createStore } from 'redux';

import CategoriesReducer from './Reducers/categories.reducer';
import ProductsReducer from './Reducers/products.reducer';

const RootReducer = combineReducers({
	products: ProductsReducer,
	category: CategoriesReducer,
});

export default createStore(RootReducer);
