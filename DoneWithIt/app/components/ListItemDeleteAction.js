import React from 'react';
import { View, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

const ListItemDeleteAction = ({ onPress }) => {
	return (
		<TouchableNativeFeedback onPress={onPress}>
			<View style={styles.container}>
				<MaterialCommunityIcons
					name='trash-can'
					size={35}
					color={colors.white}
				/>
			</View>
		</TouchableNativeFeedback>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.danger,
		width: 70,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default ListItemDeleteAction;
