import { Dimensions, StyleSheet } from 'react-native';

import theme from '../../../Constants/theme';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: theme.colors.white },
	productsList: { flex: 1, paddingHorizontal: theme.padding.t },
});
