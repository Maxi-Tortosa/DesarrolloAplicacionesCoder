import { CartContainer } from '../Screens/index';
import { HeaderTitle } from '../Components';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from './styles';
import theme from '../../Constants/theme';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
	const cartItems = useSelector((state) => state.cart.items.length);
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Cart'
				options={() => ({
					headerTitle: (props) => (
						<HeaderTitle
							contStyle={
								styles.cartHeader
							}>{`Carrito(${cartItems})`}</HeaderTitle>
					),
					headerStyle: {
						backgroundColor: theme.colors.primary,
					},
				})}
				component={CartContainer}
			/>
		</Stack.Navigator>
	);
};

export default CartNavigator;
