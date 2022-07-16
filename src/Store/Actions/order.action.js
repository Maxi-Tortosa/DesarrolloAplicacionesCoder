import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';

import { URL_API } from '../../../Constants/firebase';
import { db } from '../../Firebase';
import { orderTypes } from '../Types/order.types';

const { GET_ORDERS, DELETE_ORDER } = orderTypes;

export const getOrders = () => {
	return async (dispatch) => {
		onSnapshot(
			collection(db, 'Pedidos'),
			(snapshot) =>
				dispatch({
					type: GET_ORDERS,
					payload: snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
				}),
			(error) => console.log(error)
		);
	};
};

export const deleteOrder = (id) => {
	return async () => {
		deleteDoc(doc(db, 'Pedidos', id));
	};
};
