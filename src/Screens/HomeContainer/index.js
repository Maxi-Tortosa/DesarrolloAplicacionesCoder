import { Card, Header, Input, StyledButton } from '../../Components/index';
import { Categories, Products } from '../../../Mocks/products';
import { FlatList, SafeAreaView, ScrollView, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { StyledText } from '../../Components/index';
import { styles } from './styles';

const HomeContainer = () => {
	const [order, setOrder] = useState([]);

	// const onSubstract = (e, text, prop) => {
	// 	setOrder((currentOrder) => currentOrder.filter((elem) => elem.id != prop));
	// };
	// useEffect(() => {
	// console.warn(order);
	// }, [order]);

	// const renderItem = ({ item, index }) => (
	// 	<View style={styles.item} key={index}>
	// 		<Text style={styles.itemText}>{item.name}</Text>
	// 		<StyledButton
	// 			text='x'
	// 			backgroundColor='#F3D15F'
	// 			onPressEvent={onSubstract}
	// 			prop={item.id}
	// 		/>
	// 	</View>
	// );
	return (
		<View style={styles.container}>
			<Header />
			<Input style={styles.searcherInput} placeholder='Encontrá tu producto' />
			<SafeAreaView horizontal={false} style={{ flex: 1, marginTop: 20 }}>
				<ScrollView style={{ paddingVertical: 20 }}>
					{Categories.map((cat, index) => {
						return (
							<View key={index}>
								<StyledText style={styles.categoryText} font='interBold'>
									{cat}
								</StyledText>
								<ScrollView horizontal={true}>
									{Products.map((elem, index) =>
										elem.category == cat ? (
											<Card
												key={index}
												product={elem}
												order={order}
												setOrder={setOrder}
											/>
										) : null
									)}
								</ScrollView>
							</View>
						);
					})}
				</ScrollView>
			</SafeAreaView>
		</View>
	);
};

export default HomeContainer;
