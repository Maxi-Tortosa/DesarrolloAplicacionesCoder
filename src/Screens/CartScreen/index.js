import {
	CartItem,
	ConfirmModal,
	Loader,
	StyledButton,
	StyledText,
} from '../../Components/index';
import { FlatList, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import {
	confirmCart,
	getProducts,
	removeItem,
} from '../../Store/Actions/cart.actions';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import theme from '../../../Constants/theme';

const CartScreen = ({ navigation }) => {
	const [pending, setPending] = useState(true);
	const [confirm, setConfirm] = useState(false);
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart.items);
	const total = useSelector((state) => state.cart.total);
	const userId = useSelector((state) => state.login.uid);

	const onHandlerDelete = (id) => {
		dispatch(removeItem(id));
		dispatch(getProducts());
	};
	const onHandlerConfirmCart = () => {
		const order = cart.map((item) => {
			return {
				id: item.code,
				name: item.name,
				price: item.price,
				quantity: item.quantity,
			};
		});
		dispatch(confirmCart(order, total, userId));
	};

	useEffect(() => {
		dispatch(getProducts());
		setTimeout(() => {
			setPending(false);
		}, 2000);
	}, [confirm]);

	const renderItem = ({ item }) => (
		<CartItem item={item} onDelete={onHandlerDelete} />
	);

	const handlePress = () => {
		navigation.navigate('Home');
	};
	const handleModal = () => {
		setConfirm(!confirm);
	};

	return (
		<>
			{cart ? (
				<View style={styles.container}>
					<View style={styles.cartList}>
						<FlatList
							data={cart}
							renderItem={renderItem}
							keyExtractor={(item) => item.id}
							ListEmptyComponent={() =>
								!pending ? (
									<>
										<StyledText font='inter' style={styles.noProductsText}>
											No existen pedidos realizados, animate y probá nuestros
											productos
										</StyledText>
										<StyledButton
											onPressEvent={handlePress}
											style={{ marginTop: theme.margin.th }}
											text='Hacé tu pedido ahora'
											backgroundColor={theme.colors.lightGrey}
											fontSize={theme.fontSize.titleS}
											font='interBold'
										/>
									</>
								) : (
									<Loader
										style={{ marginTop: theme.margin.f * 4 }}
										color={theme.colors.primary}
										size={55}
									/>
								)
							}
						/>
					</View>
					{cart.length > 0 && (
						<View style={styles.footer}>
							<TouchableOpacity
								style={styles.buttonConfirm}
								onPress={handleModal}>
								<StyledText font='inter' style={styles.buttonText}>
									Confirmar
								</StyledText>
								<View style={styles.totalContainer}>
									<StyledText font='interBold' style={styles.totalTitle}>
										Total
									</StyledText>
									<StyledText font='interBold' style={styles.total}>
										${total.toFixed(2)}
									</StyledText>
								</View>
							</TouchableOpacity>
						</View>
					)}
					{confirm && (
						<ConfirmModal
							confirm={confirm}
							handleModal={handleModal}
							handleConfirm={onHandlerConfirmCart}
						/>
					)}
				</View>
			) : (
				<Loader color={theme.colors.primary} size={55} />
			)}
		</>
	);
};

export default CartScreen;
