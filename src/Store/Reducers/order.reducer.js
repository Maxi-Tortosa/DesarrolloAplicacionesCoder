import { orderTypes } from '../Types/order.types';

const { GET_ORDERS, DELETE_ORDER } = orderTypes;
const initialState = {
	items: [],
};

const OrderReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ORDERS:
			return {
				...state,
				items: action.payload,
			};

		default:
			return state;
	}
};

export default OrderReducer;
