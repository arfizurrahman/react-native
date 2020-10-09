import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';

export default function App() {
	return (
		<Screen>
			<ListItem
				title='My Title'
				subTitle='My sub titlte'
				ImageComponent={<Icon name='email' />}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({});
