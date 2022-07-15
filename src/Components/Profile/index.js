import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import {
	Alert,
	Image,
	Modal,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import React, { useState } from 'react';

import IonicIcons from '@expo/vector-icons/Ionicons';
import StyledButton from '../StyledButton';
import StyledText from '../StyledText';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import { styles } from './styles';
import theme from '../../../Constants/theme';

const Profile = ({ onImage }) => {
	const [pickedUrl, setPickedUrl] = useState('');

	const name = 'Maxi';
	const mail = 'maximilianotortosa@gmail.com';
	const noPictureText = name.slice(0, 1);

	const verifyPermissions = async () => {
		const { status } = await ImagePicker.requestCameraPermissionsAsync();
		if (status !== 'granted') {
			Alert.alert(
				('Permisos insuficientes',
				'Necesitas permisos para usar la cámara',
				[{ text: 'Ok' }])
			);
			return false;
		}
		return true;
	};

	const handleTakePicture = async () => {
		const isCameraPermissionGranted = await verifyPermissions();

		if (!isCameraPermissionGranted) return;

		const image = await ImagePicker.launchCameraAsync({
			allowsEditing: true,
			aspect: [16, 16],
			quality: 0.7,
		});

		setPickedUrl(image.uri);
		onImage(image.uri);
	};

	return (
		<View style={styles.container}>
			<TouchableWithoutFeedback onPress={handleTakePicture}>
				<View style={styles.preview}>
					{!pickedUrl ? (
						<StyledText
							style={{ fontSize: 40, color: theme.colors.white }}
							font='interBold'>
							{noPictureText}
						</StyledText>
					) : (
						<Image source={{ uri: pickedUrl }} style={styles.picture} />
					)}
					<IonicIcons style={styles.icon} name='camera' size={20} />
				</View>
			</TouchableWithoutFeedback>
			<View style={styles.information}>
				<StyledText style={styles.userName} font='interBold'>
					{name}
				</StyledText>
				<StyledText style={styles.userMail} font='inter'>
					{mail}
				</StyledText>
			</View>
		</View>
	);
};

export default Profile;
