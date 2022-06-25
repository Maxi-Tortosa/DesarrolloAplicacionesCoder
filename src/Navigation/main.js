import { CartContainer, HomeContainer, LoginContainer } from '../Screens/index';

import React from 'react';
import { StyledText } from '../Components/index';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from './styles';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Shop'
				component={HomeContainer}
				options={{
					headerShown: false,
					headerTitle: (props) => {
						return (
							<StyledText {...props} style={styles.headerTitle}>
								Hacé tu pedido
							</StyledText>
						);
					},
					headerTitleAlign: 'center',
				}}
			/>
		</Stack.Navigator>
	);
};

export default MainNavigator;
