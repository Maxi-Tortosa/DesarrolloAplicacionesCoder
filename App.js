import React, { useState } from 'react';

import { ActivityIndicator } from 'react-native';
import CartContainer from './src/Screens/CartContainer/index';
import HomeContainer from './src/Screens/HomeContainer/index';
import LoginContainer from './src/Screens/LoginContainer/index';
import theme from './Constants/theme';
import { useFonts } from 'expo-font';

export default function App() {
	const [user, setUser] = useState(false);
	const [loaded] = useFonts({
		Inter: require('./assets/fonts/inter/Inter-Regular.ttf'),
		InterBold: require('./assets/fonts/inter/Inter-Bold.ttf'),
		InterExtraBold: require('./assets/fonts/inter/Inter-ExtraBold.ttf'),
	});

	if (!loaded) {
		return <ActivityIndicator size='large' color={theme.colors.primary} />;
	}

	// const [text, setText] = useState();
	// const [list, setList] = useState([]);
	// const [itemSelected, setItemSelected] = useState({});
	// const [modalVisible, setModalVisible] = useState(false);

	// const handleChangeText = (text) => {
	// 	setText(text);
	// };

	// const addItem = () => {
	// 	if (text != '') {
	// 		setList((currentList) => [
	// 			...currentList,
	// 			{ id: Math.random(), value: text },
	// 		]);
	// 		setText('');
	// 	}
	// };

	// const onHandlerDelete = (id) => {
	// 	setList((currentList) => currentList.filter((item) => item.id != id));
	// 	setItemSelected({});
	// 	setModalVisible(!modalVisible);
	// };

	// const onHandlerModal = (id) => {
	// 	setItemSelected(list.filter((item) => item.id == id)[0]);
	// 	setModalVisible(!modalVisible);
	// };

	// const renderItem = ({ item }) => (
	// 	<View key={item.id} style={styles.containerItemList}>
	// 		<Text style={styles.itemList}>{item.value}</Text>
	// 		<TouchableOpacity
	// 			style={styles.deleteButton}
	// 			onPress={() => onHandlerModal(item.id)}>
	// 			<Text style={styles.deleteButtonText}> X </Text>
	// 		</TouchableOpacity>
	// 	</View>
	// );

	// const keyExtractor = (item) => item.id.toString();

	return (
		<>
			{!user ? <LoginContainer setUser={setUser} /> : <HomeContainer />}

			{/* <CartContainer /> */}
		</>
		// <View style={styles.container}>
		// 	<View style={styles.content}>
		// 		<TextInput
		// 			placeholder='new task'
		// 			style={styles.input}
		// 			placeholderTextColor='red'
		// 			value={text}
		// 			onChangeText={(text) => handleChangeText(text)}
		// 		/>
		// 		<Button title='ADD' onPress={addItem} />
		// 	</View>

		// 	<FlatList
		// 		style={styles.containerList}
		// 		data={list}
		// 		renderItem={renderItem}
		// 		keyExtractor={keyExtractor}
		// 	/>
		// 	<Modal
		// 		animationType='slide'
		// 		visible={modalVisible}
		// 		onRequestClose={() => null}>
		// 		<View style={styles.Content}>
		// 			<View style={styles.modalTittleContainer}>
		// 				<Text style={styles.modalTittle}>Delete button</Text>
		// 				<TouchableOpacity
		// 					style={styles.deleteButton}
		// 					onPress={() => setModalVisible(!modalVisible)}>
		// 					<Text style={styles.deleteButtonText}>X</Text>
		// 				</TouchableOpacity>
		// 			</View>
		// 			<Text style={styles.modalConfirmation}>Are you sure?</Text>
		// 			<Text style={styles.modalConfirmationItem}>{itemSelected.value}</Text>
		// 			<Button
		// 				onPress={() => onHandlerDelete(itemSelected.id)}
		// 				title='OK'
		// 				color='blue'
		// 			/>
		// 		</View>
		// 	</Modal>
		// </View>
	);
}
