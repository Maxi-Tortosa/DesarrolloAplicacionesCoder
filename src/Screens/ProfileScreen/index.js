import { Profile, StyledButton } from '../../Components';
import React, { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { setProfilePicture, signout } from '../../Store/Actions/login.actions';
import { useDispatch, useSelector } from 'react-redux';

import { View } from 'react-native';
import { db } from '../../Firebase';
import { styles } from './styles';

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

	const handleClose = () => {
		dispatch(signout());
	};

	return (
		<View style={styles.container}>
			<Profile onImage={onHandlePictureChange} user={user} />
			<StyledButton
				onPressEvent={() => navigation.navigate('Order')}
				text='Ir a órdenes'
			/>
			<StyledButton text='Cerrar sesión' onPressEvent={handleClose} />
		</View>
	);
};

export default ProfileScreen;
