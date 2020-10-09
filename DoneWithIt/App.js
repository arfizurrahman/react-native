import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import AppTextInput from './app/components/AppTextInput';
import Screen from './app/components/Screen';

import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';

export default function App() {
	const [firstName, setFirstName] = useState('');
	return (
		<Screen>
			<AppTextInput placeholder='Username' icon='email' />
		</Screen>
	);
}

const styles = StyleSheet.create({});
