import { Profile, StyledButton, StyledText } from '../../Components';
import React, { useEffect, useState } from 'react';

import { View } from 'react-native';
import { styles } from './styles';

const ProfileScreen = ({ navigation }) => {
	const onHandlePictureChange = () => {};

	return (
		<View style={styles.container}>
			<Profile onImage={(image) => console.log(image)} />
		</View>
	);
};

export default ProfileScreen;
