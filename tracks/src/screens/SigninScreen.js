import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = ({}) => {
	const { state, signin, clearErrorMessage } = useContext(AuthContext);

	return (
		<View style={styles.container}>
			<NavigationEvents onWillFocus={clearErrorMessage} />
			<AuthForm
				headerText='Sign In for Tracker'
				errorMessage={state.errorMessage}
				buttonTitle='Sign In'
				onSubmit={signin}
			/>
			<NavLink
				routeName='Signup'
				text="Don't have an account? Sign up instead"
			/>
		</View>
	);
};

SigninScreen.navigationOptions = () => {
	return {
		header: () => false,
	};
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginBottom: 120,
	},
	errorMessage: {
		fontSize: 16,
		color: 'red',
		marginLeft: 15,
	},
});

export default SigninScreen;
