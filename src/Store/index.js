import { applyMiddleware, combineReducers, createStore } from 'redux';

import CartReducer from './Reducers/cart.reducer';
import CategoriesReducer from './Reducers/categories.reducer';
import LoginReducer from './Reducers/login.reducer';
import OrderReducer from './Reducers/order.reducer';
import ProductsReducer from './Reducers/products.reducer';
import thunk from 'redux-thunk';

const RootReducer = combineReducers({
	products: ProductsReducer,
	category: CategoriesReducer,
	cart: CartReducer,
	order: OrderReducer,
	login: LoginReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
