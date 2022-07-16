import {
	CategoryCard,
	Header,
	Input,
	StyledButton,
	StyledText,
} from '../../Components/index';
import { FlatList, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import {
	getCategories,
	selectCategory,
} from '../../Store/Actions/category.actions';
import { useDispatch, useSelector } from 'react-redux';

import { getProducts } from './../../Store/Actions/products.actions';
import { signout } from './../../Store/Actions/login.actions';
import { styles } from './styles';

const HomeContainer = ({ navigation }) => {
	const dispatch = useDispatch();
	const categories = useSelector((state) => state.category.categories);
	const onSelected = (item) => {
		dispatch(selectCategory(item.id));
		navigation.navigate('Products', {
			name: item.name,
		});
	};

	const handleClose = () => {
		dispatch(signout());
	};

	useEffect(() => {
		dispatch(getCategories());
		dispatch(getProducts());
	}, []);

	const renderItem = ({ item }) => (
		<CategoryCard item={item} onSelected={onSelected} />
	);

	return (
		<View style={styles.container}>
			<StyledButton text='Cerrar sesión' onPressEvent={handleClose} />
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
