import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextScreen = () => {
	const [password, setPassword] = useState('');

	return (
		<View>
			<Text>Enter password:</Text>
			<TextInput
				autoCapitalize='none'
				autoCorrect={false}
				style={styles.input}
				value={password}
				onChangeText={(newPassword) => {
					setPassword(newPassword);
				}}
			/>
			{password.length <= 5 ? (
				<TextInput>Password must be at least 5 characters</TextInput>
			) : null}
		</View>
	);
};

const styles = StyleSheet.create({
	input: { margin: 15, borderColor: 'black', borderWidth: 1 },
});

export default TextScreen;
