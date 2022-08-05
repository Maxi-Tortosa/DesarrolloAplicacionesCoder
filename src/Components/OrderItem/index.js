import { TouchableOpacity, View } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import StyledText from '../StyledText';
import { styles } from './styles';
import theme from '../../../Constants/theme';

const OrderItem = ({ item, onDelete }) => {
	const formatDate = (time) => {
		const date = new Date(time);
		return date.toLocaleDateString();
	};

	const handleDelete = () => {
		onDelete(item.id);
	};

	return (
		<View style={styles.container}>
			<View style={styles.details}>
				<StyledText
					style={styles.detailDate}
					font='inter'
					lines={1}
					ellipsis='tail'>
					{formatDate(item.date)}
				</StyledText>
				<StyledText
					style={styles.detailText}
					font='interBold'
					lines={1}
					ellipsis='tail'>
					Items: {item.items[0].quantity}
				</StyledText>
				<StyledText
					style={styles.detailText}
					font='interBold'
					lines={1}
					ellipsis='tail'>
					Estado: {item.estado}
				</StyledText>
				<StyledText font='interBold' style={styles.detailPrice}>
					Total: ${item.total}
				</StyledText>
			</View>
			<TouchableOpacity onPress={handleDelete}>
				<Ionicons name='trash' size={20} />
			</TouchableOpacity>
		</View>
	);
};

export default OrderItem;
