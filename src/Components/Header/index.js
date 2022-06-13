import { ImageBackground, Text, View } from 'react-native';

import React from 'react';
import { styles } from './styles';

const Header = () => {
	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.image}
				source={require('./headerImg.jpg')}
				resizeMode='cover'
			/>
		</View>
	);
};

export default Header;
