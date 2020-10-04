import React, { useState, Fragment } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, buttonTitle }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<Fragment>
			{/* onPress={() => navigation.navigate('mainFlow')} */}
			<Spacer>
				<Text h3>{headerText}</Text>
			</Spacer>
			<Spacer />
			<Input
				label='Email'
				autoCapitalize={'none'}
				autoCorrect={false}
				value={email}
				onChangeText={setEmail}
			/>
			<Input
				label='Password'
				autoCapitalize={'none'}
				autoCorrect={false}
				value={password}
				secureTextEntry
				onChangeText={setPassword}
			/>
			{errorMessage ? (
				<Text style={styles.errorMessage}>{errorMessage}</Text>
			) : null}
			<Spacer>
				<Button
					title={buttonTitle}
					onPress={() => onSubmit({ email, password })}
				/>
			</Spacer>
		</Fragment>
	);
};

AuthForm.navigationOptions = () => {
	return {
		header: () => false,
	};
};
const styles = StyleSheet.create({
	errorMessage: {
		fontSize: 16,
		color: 'red',
		marginLeft: 15,
	},
});

export default AuthForm;
