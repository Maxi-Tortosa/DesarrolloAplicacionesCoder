import { Card, Header, Input, StyledButton } from '../../Components/index';
import { Categories, Products } from '../../../Mocks/products';
import { FlatList, SafeAreaView, ScrollView, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StyledText } from '../../Components/index';
import { styles } from './styles';
import { db } from '../../../Firebase';
import { onSnapshot, collection, addDoc } from 'firebase/firestore';

const HomeContainer = () => {
	const [order, setOrder] = useState([]);
	const [productos, setProductos] = useState([]);
	const [categorias, setCategorias] = useState([]);

	useEffect(() => {
		onSnapshot(
			collection(db, 'Productos'),
			(snapshot) => setProductos(snapshot.docs.map((doc) => doc.data())),
			(error) => console.log('error', error)
		);
		onSnapshot(
			collection(db, 'Categorias'),
			(snapshot) => setCategorias(snapshot.docs.map((doc) => doc.data())),
			(error) => console.log('error', error)
		);
	}, []);

	// useEffect(() => {
	// 	const docRef = collection(db, 'Productos');

	// 	Products.forEach((elem) => {
	// 		const product = {
	// 			name: elem.name,
	// 			description: elem.description,
	// 			variety: elem.variety,
	// 			price: elem.price,
	// 			img: elem.img,
	// 			category: elem.category,
	// 		};
	// 		return addDoc(docRef, product);
	// 	});
	// }, []);

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

			<ScrollView style={styles.verticalScroll}>
				{categorias &&
					categorias.map((cat, index) => {
						const productsCategory =
							productos &&
							productos.filter((elem) => elem.category == cat.name);

						return (
							<View key={index}>
								<StyledText style={styles.categoryText} font='interBold'>
									{cat.name}
								</StyledText>
								<ScrollView horizontal={true}>
									{productsCategory.length !== 0 ? (
										productsCategory.map((elem, index) => (
											<Card
												key={index}
												product={elem}
												order={order}
												setOrder={setOrder}
											/>
										))
									) : (
										<StyledText style={styles.noproductsText} font='inter'>
											No existen productos para esta categoria
										</StyledText>
									)}
								</ScrollView>
							</View>
						);
					})}
			</ScrollView>
		</View>
	);
};

export default HomeContainer;
