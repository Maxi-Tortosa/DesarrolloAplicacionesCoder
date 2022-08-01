import { TouchableOpacity, View } from 'react-native';

import IonicIcons from '@expo/vector-icons/Ionicons';
import React from 'react';
import StyledText from '../StyledText/index';
import { styles } from './styles';
import theme from '../../../Constants/theme';

const CartItem = ({ item, onDelete }) => {
	const handlerPress = (id) => {
		onDelete(id);
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
					${Number(item.price).toFixed(2)}
				</StyledText>
			</View>
			<TouchableOpacity onPress={() => handlerPress(item.code)}>
				<IonicIcons name='trash' size={20} color={theme.colors.primary} />
			</TouchableOpacity>
		</View>
	);
};

export default CartItem;
