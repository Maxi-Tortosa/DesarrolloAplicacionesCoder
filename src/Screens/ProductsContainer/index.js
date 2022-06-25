import { FlatList, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, query, where } from 'firebase/firestore';

import { Card } from '../../Components';
import StyledText from '../../Components/StyledText';
import { db } from '../../../Firebase';
import { styles } from './styles';

//CONTEMPLAR ELEGIR SABORES EN EL DETAIL

const ProductsContainer = ({ navigation, route }) => {
	const { name, categoriaId } = route.params;
	const [productosFiltrados, setProductosFiltrados] = useState([]);

	useEffect(() => {
		onSnapshot(
			query(collection(db, 'Productos'), where('category', '==', name)),
			(snapshot) =>
				setProductosFiltrados(
					snapshot.docs.map((doc) => ({ ...doc.data(), ['id']: doc.id }))
				),

			(error) => console.warn('error', error)
		);
	}, []);

	const renderItem = ({ item }) => <Card product={item} />;

	return (
		<View style={styles.container}>
			<FlatList
				style={styles.productsList}
				data={productosFiltrados}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				numColumns={2}
			/>
		</View>
	);
};

export default ProductsContainer;
