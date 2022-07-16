import { Profile, StyledButton, StyledText } from '../../Components';
import React, { useEffect, useState } from 'react';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';

import { View } from 'react-native';
import { db } from '../../Firebase';
import { setProfilePicture } from '../../Store/Actions/login.actions';
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

	// useEffect(() => {
	// 	currentUserUid && dispatch(getProfilePicture(currentUserUid));
	// }, [currentUserUid]);

	const onHandlePictureChange = (image) => {
		dispatch(setProfilePicture(image, currentUserUid, userId));
	};

	return (
		<View style={styles.container}>
			<Profile onImage={onHandlePictureChange} user={user} />
		</View>
	);
};

export default ProfileScreen;
