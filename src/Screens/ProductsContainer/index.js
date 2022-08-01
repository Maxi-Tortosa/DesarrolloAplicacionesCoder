import { Card, Loader } from '../../Components';
import { FlatList, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import {
	filteredProducts,
	selectProduct,
} from '../../Store/Actions/products.actions';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import theme from '../../../Constants/theme';

const ProductsContainer = ({ navigation }) => {
	const dispatch = useDispatch();
	const filterProducts = useSelector(
		(state) => state.products.filteredProducts
	);

	const category = useSelector((state) => state.category.selected);

	useEffect(() => {
		dispatch(filteredProducts(category.name));
	}, []);

	const onPress = (item) => {
		dispatch(selectProduct(item.id));
		navigation.navigate('ProductDetail', {
			category: category.name,
		});
	};

	const renderItem = ({ item }) => <Card product={item} onPress={onPress} />;

	return (
		<View style={styles.container}>
			{!filterProducts ? (
				<Loader color={theme.colors.primary} size={55} />
			) : (
				<FlatList
					style={styles.productsList}
					data={filterProducts}
					renderItem={renderItem}
					keyExtractor={(item) => item.id}
					numColumns={2}
				/>
			)}
		</View>
	);
};

export default ProductsContainer;
