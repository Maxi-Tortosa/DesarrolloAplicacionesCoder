import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
	container: { flex: 1 },
	productsList: { flex: 1, paddingHorizontal: 20 },
});
