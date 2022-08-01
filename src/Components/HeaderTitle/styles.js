import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';
import theme from '../../../Constants/theme';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
	headerContainer: { width: width / 1.35 },
	headerText: {
		fontSize: 18,
	},
});
