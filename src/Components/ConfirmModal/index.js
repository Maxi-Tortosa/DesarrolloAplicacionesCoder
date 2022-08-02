import { Modal, TouchableWithoutFeedback, View } from 'react-native';

import React from 'react';
import StyledButton from '../StyledButton';
import StyledText from '../StyledText';
import { styles } from './styles';
import theme from '../../../Constants/theme';

const ConfirmModal = ({ confirm, handleModal, handleConfirm }) => {
	const onConfirmHandler = () => {
		handleConfirm();
		handleModal();
	};
	return (
		<Modal animationType='slide' transparent={true} visible={confirm}>
			<TouchableWithoutFeedback>
				<View style={styles.modalContainer}>
					<StyledText style={styles.titleText} font='interExtraBold'>
						¿Estás seguro/a que deseas confirmar tu pedido?
					</StyledText>
					<StyledText style={styles.infoText} font='inter'>
						Recordá que podrás visualizar tus órdenes ingresando a tu perfil
					</StyledText>
					<StyledButton
						onPressEvent={onConfirmHandler}
						style={styles.confirmButton}
						backgroundColor={theme.colors.primary}
						fontSize={theme.fontSize.titleS}
						fontColor={theme.colors.white}
						font='interBold'
						text='Confirmar'
					/>
					<StyledButton
						style={styles.cancelButton}
						backgroundColor={theme.colors.white}
						fontSize={theme.fontSize.titleS}
						fontColor={theme.colors.primary}
						font='interBold'
						text='Cancelar'
						onPressEvent={handleModal}
					/>
				</View>
			</TouchableWithoutFeedback>
		</Modal>
	);
};

export default ConfirmModal;
