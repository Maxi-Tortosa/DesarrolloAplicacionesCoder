import { FlatList, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import {
	confirmCart,
	getProducts,
	removeItem,
} from '../../Store/Actions/cart.actions';
import { useDispatch, useSelector } from 'react-redux';

import { CartItem } from '../../Components/index';
import { StyledText } from '../../Components';
import { styles } from './styles';

const CartContainer = () => {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart.items);
	const total = useSelector((state) => state.cart.total);

	const onHandlerDelete = (id) => dispatch(removeItem(id));
	const onHandlerConfirmCart = () => {
		dispatch(confirmCart(cart, total));
	};

	useEffect(() => {
		dispatch(getProducts());
	}, []);

	const renderItem = ({ item }) => (
		<CartItem item={item} onDelete={onHandlerDelete} />
	);

	return (
		<View style={styles.container}>
			<StyledText font='inter'>Este es el detalle de tu pedido</StyledText>
			{/* GENERAR MODAL PARA CONFIRMAR */}
			<View style={styles.container}>
				<View style={styles.cartList}>
					<FlatList
						data={cart}
						renderItem={renderItem}
						keyExtractor={(item) => item.id}
					/>
				</View>
				<View style={styles.footer}>
					<TouchableOpacity
						style={styles.buttonConfirm}
						onPress={() => onHandlerConfirmCart()}>
						<StyledText font='inter' style={styles.buttonText}>
							Confirm
						</StyledText>
						<View style={styles.totalContainer}>
							<StyledText font='inter' style={styles.totalTitle}>
								Total
							</StyledText>
							<StyledText font='inter' style={styles.total}>
								${total}
							</StyledText>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default CartContainer;
