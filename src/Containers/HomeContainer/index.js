import {
	FlatList,
	Item,
	SafeAreaView,
	ScrollView,
	Text,
	View,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import Card from './../../Components/Card/index';
import Input from '../../Components/Input';
import { Products } from '../../../Mocks/products';
import StyledButton from '../../Components/StyledButton';
import { styles } from './styles';

const HomeContainer = () => {
	const [order, setOrder] = useState([]);

	const onSubstract = (e, text, prop) => {
		setOrder((currentOrder) => currentOrder.filter((elem) => elem.id != prop));
	};
	useEffect(() => {
		// console.warn(order);
	}, [order]);

	const renderItem = ({ item, index }) => (
		<View style={styles.item} key={index}>
			<Text style={styles.itemText}>{item.name}</Text>
			<StyledButton
				text='x'
				backgroundColor='#F3D15F'
				onPressEvent={onSubstract}
				prop={item.id}
			/>
		</View>
	);
	return (
		<View style={styles.container}>
			<Input style={styles.searcherInput} placeholder='Encontrá tu producto' />
			<SafeAreaView horizontal={false} style={{ flex: 1 }}>
				<ScrollView style={{ flex: 1 }}>
					<SafeAreaView style={{}}>
						<ScrollView horizontal={true} style={{}}>
							{Products.map((elem, index) => (
								<Card
									key={index}
									product={elem}
									order={order}
									setOrder={setOrder}
								/>
							))}
						</ScrollView>
					</SafeAreaView>
				</ScrollView>
			</SafeAreaView>
			<View style={styles.order}>
				<Text style={styles.orderTitle}>Tu pedido</Text>
				<FlatList
					style={styles.orderList}
					data={order}
					renderItem={renderItem}
					keyExtractor={(item) => item.id}
				/>
			</View>
		</View>
	);
};

export default HomeContainer;
