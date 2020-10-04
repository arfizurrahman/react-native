import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { Feather } from '@expo/vector-icons';

const AccountScreen = () => {
	const { signout } = useContext(AuthContext);
	return (
		<SafeAreaView forceInset={{ top: 'always' }}>
			<Text style={{ fontSize: 20 }}>Account Screen</Text>
			<Spacer>
				<Button title='Sign Out' onPress={signout} />
			</Spacer>
		</SafeAreaView>
	);
};

AccountScreen.navigationOptions = {
	title: 'Account',
	tabBarIcon: () => <Feather name='settings' size={20} />,
};

const styles = StyleSheet.create({});

export default AccountScreen;
