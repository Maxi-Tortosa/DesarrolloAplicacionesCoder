import { CartContainer, HomeContainer, LoginContainer } from '../Screens/index';

import React from 'react';
import { StyledText } from '../Components/index';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from './styles';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Login' component={LoginContainer} />
			<Stack.Screen
				name='Home'
				component={HomeContainer}
				options={{
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
			<Stack.Screen name='Cart' component={CartContainer} />
		</Stack.Navigator>
	);
};

export default MainNavigator;
