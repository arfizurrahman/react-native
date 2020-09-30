import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
	return (
		<View style={styles.background}>
			<Feather name='search' style={styles.icon} />
			<TextInput
				autoCapitalize='none'
				autoCorrect={false}
				placeholder='Search'
				style={styles.input}
				value=''
				onChangeText={(value) => {
					console.log(value);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	background: {
		marginTop: 10,
		backgroundColor: '#EAEAEA',
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: 'row',
	},
	input: {
		flex: 1,
		fontSize: 18,
	},
	icon: {
		fontSize: 35,
		alignSelf: 'center',
		marginHorizontal: 15,
	},
});

export default SearchBar;
