import React, { useEffect, useState } from 'react';

import StyledText from '../../Components/StyledText/index';
import { View } from 'react-native';
import { styles } from './styles';

const ProfileScreen = ({ navigation }) => {
	const onHandlePictureChange = () => {};

	return (
		<View style={styles.container}>
			<StyledText>Soy el profile</StyledText>
		</View>
	);
};

export default ProfileScreen;
