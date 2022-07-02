import { FlatList, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import {
	filteredProducts,
	selectProduct,
} from '../../Store/Actions/products.actions';
import { useDispatch, useSelector } from 'react-redux';

import { Card } from '../../Components';
import StyledText from '../../Components/StyledText';
import { db } from '../../../Firebase';
import { styles } from './styles';

//CONTEMPLAR ELEGIR SABORES EN EL DETAIL

const ProductsContainer = ({ navigation }) => {
	const dispatch = useDispatch();
	const filterProducts = useSelector(
		(state) => state.products.filteredProducts
	);

	const category = useSelector((state) => state.category.selected);

	useEffect(() => {
		dispatch(filteredProducts(category.name));
	}, []);

	// useEffect(() => {
	// 	onSnapshot(
	// 		query(collection(db, 'Productos'), where('category', '==', name)),
	// 		(snapshot) =>
	// 			setProductosFiltrados(
	// 				snapshot.docs.map((doc) => ({ ...doc.data(), ['id']: doc.id }))
	// 			),

	// 		(error) => console.warn('error', error)
	// 	);
	// }, []);

	const onPress = (item) => {
		dispatch(selectProduct(item.id));
		navigation.navigate('ProductDetail', {
			name: item.name,
		});
	};

	const renderItem = ({ item }) => <Card product={item} onPress={onPress} />;

	return (
		<View style={styles.container}>
			<FlatList
				style={styles.productsList}
				data={filterProducts}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				numColumns={2}
			/>
		</View>
	);
};

export default ProductsContainer;
