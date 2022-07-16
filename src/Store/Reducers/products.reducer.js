import { Products } from '../../../Mocks/products';
import { productsTypes } from './../Types/products.types';

const { SELECT_PRODUCT, FILTERED_PRODUCTS, GET_PRODUCTS } = productsTypes;

const initialState = {
	products: [],
	filteredProducts: [],
	selected: null,
};

const ProductsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SELECT_PRODUCT:
			return {
				...state,
				selected: state.products.find(
					(product) => product.id === action.productId
				),
			};
		case FILTERED_PRODUCTS:
			return {
				...state,
				filteredProducts: state.products.filter(
					(product) => product.category === action.categoryName
				),
			};

		case GET_PRODUCTS:
			return {
				...state,
				products: action.payload,
			};
		default:
			return state;
	}
};

export default ProductsReducer;
