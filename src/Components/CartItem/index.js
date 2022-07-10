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
			<View style={styles.headerContainer}>
				<StyledText style={styles.header}>{item.name}</StyledText>
			</View>
			<View style={styles.containerDetail}>
				<View style={styles.detail}>
					<StyledText style={styles.detailQty}>{item.quantity}</StyledText>
					<StyledText style={styles.detailPrice}>${item.price}</StyledText>
				</View>
				<TouchableOpacity onPress={() => handlerPress(item.id)}>
					<IonicIcons name='trash' size={20} color={theme.colors.primary} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default CartItem;
