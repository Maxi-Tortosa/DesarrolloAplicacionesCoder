import * as ImagePicker from 'expo-image-picker';

import { Alert, Image, TouchableWithoutFeedback, View } from 'react-native';
import React, { useState } from 'react';

import IonicIcons from '@expo/vector-icons/Ionicons';
import StyledText from '../StyledText';
import { styles } from './styles';
import theme from '../../../Constants/theme';

const Profile = ({ onImage, user }) => {
	const mail = user && user.email;
	const noPictureText = user && user.email.slice(0, 1);

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

		onImage(image.uri);
	};

	return (
		<>
			{user && (
				<View style={styles.container}>
					<TouchableWithoutFeedback onPress={handleTakePicture}>
						<View style={styles.preview}>
							{!user.profilePicture ? (
								<StyledText
									style={{ fontSize: 40, color: theme.colors.white }}
									font='interBold'>
									{noPictureText}
								</StyledText>
							) : (
								<Image
									source={user.profilePicture && { uri: user.profilePicture }}
									style={styles.picture}
								/>
							)}
							<IonicIcons style={styles.icon} name='camera' size={20} />
						</View>
					</TouchableWithoutFeedback>
					<View style={styles.information}>
						<StyledText style={styles.userMail} font='inter'>
							{mail}
						</StyledText>
					</View>
				</View>
			)}
		</>
	);
};

export default Profile;
