import {
	CategoryCard,
	Header,
	Loader,
	StyledText,
} from '../../Components/index';
import { FlatList, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import {
	getCategories,
	selectCategory,
} from '../../Store/Actions/category.actions';
import { useDispatch, useSelector } from 'react-redux';

import { getProducts } from '../../Store/Actions/products.actions';
import { styles } from './styles';
import theme from '../../../Constants/theme';

const HomeScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const categories = useSelector((state) => state.category.categories);
	const onSelected = (item) => {
		dispatch(selectCategory(item.id));
		navigation.navigate('Products', {
			name: item.name,
		});
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
			<Header />
			<StyledText font='interBold' style={styles.title}>
				¡Bienvenidas/os a nuestra tienda!
			</StyledText>
			<FlatList
				style={styles.categoryList}
				data={categories}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				ListEmptyComponent={() => (
					<Loader
						style={{ paddingTop: 150 }}
						color={theme.colors.primary}
						size={55}
					/>
				)}
			/>
		</View>
	);
};

export default HomeScreen;