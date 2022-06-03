import {} from 'react-native';

import { SafeAreaView, ScrollView, Text, View } from 'react-native';

import Card from './../../Components/Card/index';
import Input from '../../Components/Input';
import { Products } from '../../../Mocks/products';
import React from 'react';
import { styles } from './styles';

const HomeContainer = () => {
	return (
		<View style={styles.container}>
			<Input style={styles.searcherInput} placeholder='Encontrá tu producto' />
			<SafeAreaView horizontal={false} style={{ flex: 1 }}>
				<ScrollView style={{}}>
					<SafeAreaView style={{}}>
						<ScrollView horizontal={true} style={{}}>
							{Products.map((elem, index) => (
								<Card key={index} product={elem} />
							))}
						</ScrollView>
					</SafeAreaView>
					{/* <SafeAreaView style={{ width: '100%' }}>
						<ScrollView
							horizontal={true}
							style={{ width: '90%', paddingHorizontal: '5%' }}>
							{Products.map((elem, index) => (
								<Card key={index} product={elem} />
							))}
						</ScrollView>
					</SafeAreaView>
					<Card product={Products[10]} />
					<Card product={Products[10]} /> */}
				</ScrollView>
			</SafeAreaView>
		</View>
	);
};

export default HomeContainer;
