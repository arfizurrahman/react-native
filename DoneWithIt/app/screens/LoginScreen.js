import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import ErrorMessage from '../components/ErrorMessage';
import AppFormField from '../components/AppFormField';

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label('Email'),
	password: Yup.string().required().min(4).label('Password'),
});

const LoginScreen = () => {
	return (
		<Screen style={styles.container}>
			<Image style={styles.logo} source={require('../assets/logo-red.png')} />

			<Formik
				initialValues={{ email: '', password: '' }}
				validationSchema={validationSchema}
				onSubmit={(values) => console.log(values)}>
				{({ handleSubmit, errors, touched }) => (
					<>
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
						<AppButton title='Login' onPress={handleSubmit} />
					</>
				)}
			</Formik>
		</Screen>
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