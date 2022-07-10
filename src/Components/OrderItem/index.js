import { Text, TouchableOpacity, View } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { styles } from './styles';
import theme from '../../../Constants/theme';

const formatDate = (time) => {
	const date = new Date(time);
	return date.toLocaleDateString();
};

const OrderItem = ({ item, onDelete }) => {
	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<Text style={styles.header}>{formatDate(item.date)}</Text>
			</View>
			<View style={styles.containerDetail}>
				<View style={styles.detail}>
					<Text style={styles.detailTotal}>Total: ${item.total}</Text>
				</View>
				<TouchableOpacity onPress={() => onDelete(item.id)}>
					<Ionicons name='trash' size={20} color={theme.colors.primary} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default OrderItem;
