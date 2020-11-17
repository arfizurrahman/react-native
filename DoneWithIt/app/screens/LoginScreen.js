import React, { useState } from 'react';
import {
	StyleSheet,
	Image,
	KeyboardAvoidingView,
	Platform,
} from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import {
	ErrorMessage,
	AppForm,
	AppFormField,
	SubmitButton,
} from '../components/forms';
import authApi from '../api/auth';

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label('Email'),
	password: Yup.string().required().min(4).label('Password'),
});

const LoginScreen = () => {
	const { logIn } = useAuth();
	const [loginFailed, setLoginFailed] = useState(false);

	const handleSubmit = async ({ email, password }) => {
		const result = await authApi.login(email, password);

		if (!result.ok) return setLoginFailed(true);

		setLoginFailed(false);
		logIn(result.data);
	};

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior='position'
			keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}>
			<Image style={styles.logo} source={require('../assets/logo-red.png')} />

			<AppForm
				initialValues={{ email: '', password: '' }}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}>
				<ErrorMessage
					error='Invalid email and/or password.'
					visible={loginFailed}
				/>
				<AppFormField
					autoCapitalize='none'
					autoCorrect={false}
					icon='email'
					name='email'
					keyboardType='email-address'
					placeholder='Email'
					textContentType='emailAddress'
				/>
				<AppFormField
					autoCapitalize='none'
					autoCorrect={false}
					icon='lock'
					name='password'
					placeholder='password'
					secureTextEntry
					textContentType='password'
				/>
				<SubmitButton title='Login' />
			</AppForm>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	logo: {
		width: 80,
		height: 80,
		alignSelf: 'center',
		marginTop: 50,
		marginBottom: 20,
	},
});

export default LoginScreen;
