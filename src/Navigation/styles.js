import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';
import theme from '../../Constants/theme';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
	cartHeader: { marginLeft: theme.margin.t },
});
