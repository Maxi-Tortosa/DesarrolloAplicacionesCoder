import React from 'react';
import StyledButton from '../StyledButton/index';
import StyledText from '../StyledText';
import { View } from 'react-native';
import { styles } from './styles';
import theme from '../../../Constants/theme';

const Counter = ({
	limit = 99,
	onAdd,
	amount,
	setAmount,
	textStyle,
	addButtonStyle,
}) => {
	const handlerPress = (e, text) => {
		(text == '-') & (amount > 1) &&
			setAmount((currentAmount) => currentAmount - 1);
		(text == '+') & (amount < limit) &&
			setAmount((currentAmount) => currentAmount + 1);
	};

	const handleAdd = () => {
		onAdd();
	};

	return (
		<View style={styles.container}>
			<View style={styles.counter}>
				<StyledButton
					style={{ ...styles.counterText, ...textStyle }}
					text='-'
					fontColor={textStyle.color}
					fontSize={textStyle.fontSize}
					onPressEvent={handlerPress}
				/>
				<StyledText
					style={{ ...styles.counterText, ...textStyle }}
					font='interBold'>
					{amount}
				</StyledText>
				<StyledButton
					style={{ ...styles.counterText, ...textStyle }}
					text='+'
					fontColor={textStyle.color}
					fontSize={textStyle.fontSize}
					onPressEvent={handlerPress}
				/>
			</View>
			<StyledButton
				style={addButtonStyle}
				text='agregar a mi pedido'
				fontColor={addButtonStyle.color}
				fontSize={addButtonStyle.fontSize}
				backgroundColor='#F3D15F'
				onPressEvent={handleAdd}
				font='interBold'
			/>
		</View>
	);
};

export default Counter;
