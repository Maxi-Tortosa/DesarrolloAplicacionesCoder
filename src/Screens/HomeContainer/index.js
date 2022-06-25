import {
	Banner,
	Card,
	CategoryCard,
	Header,
	Input,
	StyledButton,
	StyledText,
} from '../../Components/index';
import { FlatList, SafeAreaView, ScrollView, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';

import { db } from '../../../Firebase';
import { styles } from './styles';

const HomeContainer = ({ navigation }) => {
	const [order, setOrder] = useState([]);

	const [categorias, setCategorias] = useState([]);

	useEffect(() => {
		onSnapshot(
			collection(db, 'Categorias'),
			(snapshot) =>
				setCategorias(
					snapshot.docs.map((doc) => ({ ...doc.data(), ['id']: doc.id }))
				),
			(error) => console.log('error', error)
		);
	}, []);

	const onSelected = (item) => {
		navigation.navigate('Products', {
			categoryId: item.id,
			name: item.name,
		});
	};

	const renderItem = ({ item }) => (
		<CategoryCard item={item} onSelected={onSelected} />
	);

	return (
		<View style={styles.container}>
			<Header />
			<Input style={styles.searcherInput} placeholder='Encontrá tu producto' />

			<FlatList
				style={styles.categoryList}
				data={categorias}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
			/>

			{/* <ScrollView style={styles.verticalScroll}>
				{categorias &&
					categorias.map((cat, index) => {
						const productsCategory =
							productos &&
							productos.filter((elem) => elem.category == cat.name);
						const renderBanner = index + 1 === categorias.length ? true : false;

						return !renderBanner ? (
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
								<Banner img={cat.catImg} />
							</View>
						) : (
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
			</ScrollView> */}
		</View>
	);
};

export default HomeContainer;
