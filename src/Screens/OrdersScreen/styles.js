import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';
import theme from '../../../Constants/theme';

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.white,
		paddingHorizontal: width / 12,
		paddingTop: theme.margin.t,
	},
	noProductsText: {
		fontSize: theme.fontSize.titleS,
	},
});
