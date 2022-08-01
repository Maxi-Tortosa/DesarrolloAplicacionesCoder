import { Dimensions, StyleSheet } from 'react-native';

import theme from '../../../Constants/theme';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.white,
		paddingHorizontal: width / 12,
	},
	signoutButton: {
		marginTop: theme.margin.th,
		borderWidth: 2,
		borderColor: theme.colors.primary,
	},
});
