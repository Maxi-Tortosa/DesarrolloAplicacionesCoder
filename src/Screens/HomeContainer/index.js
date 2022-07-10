import {
	CategoryCard,
	Header,
	Input,
	StyledButton,
	StyledText,
} from '../../Components/index';
import { FlatList, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCategory } from '../../Store/Actions/category.actions';
import { styles } from './styles';

const HomeContainer = ({ navigation }) => {
	const dispatch = useDispatch();
	const categories = useSelector((state) => state.category.categories);
	const categorySelected = useSelector((state) => state.category.selected);
	const categoryProducts = useSelector(
		(state) => state.products.filteredProducts
	);

	const onSelected = (item) => {
		dispatch(selectCategory(item.id));
		navigation.navigate('Products', {
			name: item.name,
		});
	};

	const renderItem = ({ item }) => (
		<CategoryCard item={item} onSelected={onSelected} />
	);

	return (
		<View style={styles.container}>
			<StyledButton />
			<Header />
			<Input style={styles.searcherInput} placeholder='Encontrá tu producto' />

			<FlatList
				style={styles.categoryList}
				data={categories}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

export default HomeContainer;
