import { FlatList, View } from 'react-native';

import React from 'react';
import { StyledText } from '../../Components';
import { styles } from './styles';

const OrderContainer = () => {
	return (
		<View style={styles.container}>
			<StyledText font='inter'>Este es el container de tu orden</StyledText>
		</View>
	);
};

export default OrderContainer;
