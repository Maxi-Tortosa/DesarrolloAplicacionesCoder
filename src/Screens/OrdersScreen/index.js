import { FlatList, SafeAreaView, View } from 'react-native';
import { OrderItem, StyledButton, StyledText } from '../../Components/index';
import React, { useEffect } from 'react';
import { deleteOrder, getOrders } from '../../Store/Actions/order.action';
import { useDispatch, useSelector } from 'react-redux';

import { Loader } from '../../Components/index';
import { styles } from './styles';
import theme from '../../../Constants/theme';

const OrdersScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const orders = useSelector((state) => state.order.items);
	const userId = useSelector((state) => state.login.uid);

	const handlePress = () => {
		navigation.navigate('Home');
	};

	const onDeleteOrder = (id) => {
		dispatch(deleteOrder(id));
	};
	const renderItem = ({ item }) => (
		<OrderItem item={item} onDelete={onDeleteOrder} />
	);

	useEffect(() => {
		dispatch(getOrders(userId));
	}, []);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.container}>
				{orders.length < 1 ? (
					<>
						<StyledText font='inter' style={styles.noProductsText}>
							No existen pedidos realizados, animate y probá nuestros productos
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
						data={orders}
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
		</SafeAreaView>
	);
};

export default OrdersScreen;
