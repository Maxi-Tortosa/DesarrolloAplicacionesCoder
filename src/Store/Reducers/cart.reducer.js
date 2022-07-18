import { cartTypes } from '../Types/cart.types';

const { ADD_ITEM, REMOVE_ITEM, CONFIRM_CART } = cartTypes;

const sumTotal = (list) =>
	list.map((item) => item.quantity * item.price).reduce((a, b) => a + b, 0);

const initialState = {
	items: [],
	total: 0,
};

const CartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ITEM:
			let updateCart = [];
			if (state.items.find((item) => item.id === action.item.id)) {
				updateCart = state.items.map((item) => {
					if (item.id === action.item.id) item.quantity += action.quantity;
					return item;
				});
			} else {
				const item = { ...action.item, quantity: action.quantity };
				updateCart = [...state.items, item];
			}
			return { ...state, items: updateCart, total: sumTotal(updateCart) };

		case REMOVE_ITEM:
			const filteredCart = state.items.filter((item) => item.id !== action.id);
			return { ...state, items: filteredCart, total: sumTotal(filteredCart) };
		case CONFIRM_CART:
			return { ...state, items: [], total: 0 };
		default:
			return state;
	}
};

export default CartReducer;
