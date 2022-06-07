import {
	Button,
	FlatList,
	Modal,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import React, { useState } from 'react';

import CartContainer from './src/Containers/CartContainer';
import HomeContainer from './src/Containers/HomeContainer/index';
import LoginContainer from './src/Containers/LoginContainer/index';
import { styles } from './styles';

export default function App() {
	const [text, setText] = useState();
	const [list, setList] = useState([]);
	const [itemSelected, setItemSelected] = useState({});
	const [modalVisible, setModalVisible] = useState(false);

	const handleChangeText = (text) => {
		setText(text);
	};

	const addItem = () => {
		if (text != '') {
			setList((currentList) => [
				...currentList,
				{ id: Math.random(), value: text },
			]);
			setText('');
		}
	};

	const onHandlerDelete = (id) => {
		setList((currentList) => currentList.filter((item) => item.id != id));
		setItemSelected({});
		setModalVisible(!modalVisible);
	};

	const onHandlerModal = (id) => {
		setItemSelected(list.filter((item) => item.id == id)[0]);
		setModalVisible(!modalVisible);
	};

	const renderItem = ({ item }) => (
		<View key={item.id} style={styles.containerItemList}>
			<Text style={styles.itemList}>{item.value}</Text>
			<TouchableOpacity
				style={styles.deleteButton}
				onPress={() => onHandlerModal(item.id)}>
				<Text style={styles.deleteButtonText}> X </Text>
			</TouchableOpacity>
		</View>
	);

	const keyExtractor = (item) => item.id.toString();

	return (
<<<<<<< HEAD
		// <>
		// 	{/* <LoginContainer /> */}
		// 	<HomeContainer />
		// </>
		<View style={styles.container}>
			<View style={styles.content}>
				<TextInput
					placeholder='new task'
					style={styles.input}
					placeholderTextColor='red'
					value={text}
					onChangeText={(text) => handleChangeText(text)}
				/>
				<Button title='ADD' onPress={addItem} />
			</View>
=======
		<>
			{/* <LoginContainer /> */}
			<HomeContainer />
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
>>>>>>> master

			<FlatList
				style={styles.containerList}
				data={list}
				renderItem={renderItem}
				keyExtractor={keyExtractor}
			/>
			<Modal
				animationType='slide'
				visible={modalVisible}
				onRequestClose={() => null}>
				<View style={styles.modalContent}>
					<View style={styles.modalDeleteButtonContainer}>
						<TouchableOpacity
							style={styles.deleteButton}
							onPress={() => setModalVisible(!modalVisible)}>
							<Text style={styles.deleteButtonText}>X</Text>
						</TouchableOpacity>
					</View>
					<Text style={styles.modalConfirmation}>Are you sure?</Text>
					<Text style={styles.modalConfirmationItem}>{itemSelected.value}</Text>
					<Button
						onPress={() => onHandlerDelete(itemSelected.id)}
						title='OK'
						color='blue'
					/>
				</View>
			</Modal>
		</View>
	);
}
