import {
	CartItem,
	Loader,
	StyledButton,
	StyledText,
} from '../../Components/index';
import { FlatList, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import {
	confirmCart,
	getProducts,
	removeItem,
} from '../../Store/Actions/cart.actions';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import theme from '../../../Constants/theme';

const CartContainer = ({ navigation }) => {
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

	const handlePress = () => {
		navigation.navigate('Home');
	};
	return (
		<>
			{!cart ? (
				<Loader color={theme.colors.primary} size={55} />
			) : (
				<View style={styles.container}>
					{/* GENERAR MODAL PARA CONFIRMAR */}

					<View style={styles.cartList}>
						<FlatList
							data={cart}
							renderItem={renderItem}
							keyExtractor={(item) => item.id}
							ListEmptyComponent={() => {
								return (
									<>
										<StyledText font='inter' style={styles.noProductsText}>
											No existen artículos en tu carrito, animate y probá
											nuestros productos
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
								);
							}}
						/>
					</View>
					{cart.length > 0 && (
						<View style={styles.footer}>
							<TouchableOpacity
								style={styles.buttonConfirm}
								onPress={() => onHandlerConfirmCart()}>
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
				</View>
			)}
		</>
	);
};

export default CartContainer;
