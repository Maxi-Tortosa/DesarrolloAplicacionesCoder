import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';

import { db } from '../../Firebase';
import { orderTypes } from '../Types/order.types';

const { GET_ORDERS, DELETE_ORDER } = orderTypes;

export const getOrders = (userId) => {
	return async (dispatch) => {
		onSnapshot(
			collection(db, 'Pedidos'),
			(snapshot) => {
				dispatch({
					type: GET_ORDERS,
					payload: snapshot.docs
						.map((doc) => ({ ...doc.data(), id: doc.id }))
						.filter((item) => item.userId === userId),
				});
			},
			(error) => console.log(error)
		);
	};
};

export const deleteOrder = (id) => {
	return async (dispatch) => {
		deleteDoc(doc(db, 'Pedidos', id));
		dispatch({
			type: DELETE_ORDER,
			orderId: id,
		});
	};
};
