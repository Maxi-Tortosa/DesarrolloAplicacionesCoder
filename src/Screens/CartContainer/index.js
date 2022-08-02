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

const CartContainer = ({ navigation }) => {
	const [confirm, setConfirm] = useState(false);
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart.items);
	const total = useSelector((state) => state.cart.total);

	const onHandlerDelete = (id) => {
		dispatch(removeItem(id));
		dispatch(getProducts());
	};
	const onHandlerConfirmCart = () => {
		dispatch(confirmCart(cart, total));
		dispatch(getProducts());
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
	const handleModal = () => {
		setConfirm(!confirm);
	};

	return (
		<View style={styles.container}>
			{/* GENERAR MODAL PARA CONFIRMAR */}
			<View style={styles.cartList}>
				{cart.length < 1 ? (
					<>
						<StyledText font='inter' style={styles.noProductsText}>
							No existen artículos en tu carrito, animate y probá nuestros
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
					<FlatList
						data={cart}
						renderItem={renderItem}
						keyExtractor={(item) => item.id}
						ListEmptyComponent={() => (
							<Loader
								style={{ paddingTop: 180 }}
								color={theme.colors.primary}
								size={55}
							/>
						)}
					/>
				)}
			</View>
			{cart.length > 0 && (
				<View style={styles.footer}>
					<TouchableOpacity style={styles.buttonConfirm} onPress={handleModal}>
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
	);
};

export default CartContainer;
