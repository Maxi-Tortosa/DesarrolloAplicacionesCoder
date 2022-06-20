import { ImageBackground, Text, View } from 'react-native';

import React from 'react';
import { styles } from './styles';

const Banner = ({ img }) => {
	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.image}
				source={{ uri: img }}
				resizeMode='cover'
			/>
		</View>
	);
};

export default Banner;
