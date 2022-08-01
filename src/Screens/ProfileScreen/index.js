import { Loader, Profile, StyledButton } from '../../Components';
import React, { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { setProfilePicture, signout } from '../../Store/Actions/login.actions';
import { useDispatch, useSelector } from 'react-redux';

import { View } from 'react-native';
import { db } from '../../Firebase';
import { styles } from './styles';
import theme from '../../../Constants/theme';

const ProfileScreen = ({ navigation }) => {
	const [user, setUser] = useState(null);
	const [userId, setUserId] = useState(null);
	const dispatch = useDispatch();
	const currentUserUid = useSelector((state) => state.login.uid);

	useEffect(() => {
		onSnapshot(
			collection(db, 'Users'),
			(snapshot) => {
				setUserId(
					snapshot.docs.find((doc) => doc.data().uid === currentUserUid).id
				);
				setUser(
					snapshot.docs.find((doc) => doc.data().uid === currentUserUid).data()
				);
			},
			(error) => console.log('error:', error)
		);
	}, []);

	const onHandlePictureChange = (image) => {
		dispatch(setProfilePicture(image, currentUserUid, userId));
	};

	const handleSignOut = () => {
		dispatch(signout());
	};

	const handleNavigate = () => navigation.navigate('Order');

	return (
		<>
			{!user ? (
				<Loader color={theme.colors.primary} size={55} />
			) : (
				<View style={styles.container}>
					<Profile onImage={onHandlePictureChange} user={user} />
					<StyledButton
						onPressEvent={handleNavigate}
						style={{ marginTop: theme.margin.th }}
						backgroundColor={theme.colors.primary}
						fontSize={theme.fontSize.titleS}
						font='interBold'
						text='Ir a órdenes'
					/>
					<StyledButton
						text='Cerrar sesión'
						style={styles.signoutButton}
						backgroundColor={theme.colors.white}
						fontSize={theme.fontSize.titleS}
						font='interBold'
						onPressEvent={handleSignOut}
					/>
				</View>
			)}
		</>
	);
};

export default ProfileScreen;
