import { TouchableOpacity, View } from 'react-native';

import IonicIcons from '@expo/vector-icons/Ionicons';
import React from 'react';
import StyledText from '../StyledText/index';
import { getProducts } from '../../Store/Actions/cart.actions';
import { styles } from './styles';
import theme from '../../../Constants/theme';
import { useDispatch } from 'react-redux';

const CartItem = ({ item, onDelete }) => {
	const dispatch = useDispatch();

	const subTotal = item.price * item.quantity;

	const handlerPress = (id) => {
		onDelete(id);
		dispatch(getProducts());
	};

	return (
		<View style={styles.container}>
			<View style={styles.details}>
				<StyledText
					font='inter'
					style={styles.detailsName}
					lines={1}
					ellipsis='tail'>
					{item.name}
				</StyledText>
				<StyledText font='inter' style={styles.detailQty}>
					{item.quantity} un
				</StyledText>
				<StyledText font='interBold' style={styles.detailPrice}>
					${subTotal.toFixed(2)}
				</StyledText>
			</View>
			<TouchableOpacity onPress={() => handlerPress(item.code)}>
				<IonicIcons name='trash' size={20} color={theme.colors.primary} />
			</TouchableOpacity>
		</View>
	);
};

export default CartItem;
