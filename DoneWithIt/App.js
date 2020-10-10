import React, { useState } from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import Screen from './app/components/Screen';
import AppText from './app/components/AppText';

const Link = () => {
	const navigation = useNavigation();
	return (
		<Button
			title='Click'
			onPress={() => navigation.navigate('TweetDetails', { id: 1 })}
		/>
	);
};

const Tweets = ({ navigation }) => (
	<Screen>
		<Text>Tweets</Text>
		<Link />
	</Screen>
);
const TweetDetails = ({ route }) => (
	<Screen>
		<Text>Tweet Details: {route.params.id}</Text>
	</Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
	<Stack.Navigator
		initialRouteName='Tweets'
		screenOptions={{
			headerStyle: { backgroundColor: 'dodgerblue' },
			headerTintColor: 'white',
		}}>
		<Stack.Screen
			name='Tweets'
			component={Tweets}
			options={{
				headerStyle: { backgroundColor: 'tomato' },
				headerTintColor: 'white',
			}}
		/>
		<Stack.Screen
			name='TweetDetails'
			component={TweetDetails}
			options={({ route }) => ({ title: route.params.id })}
		/>
	</Stack.Navigator>
);

const Account = () => (
	<Screen>
		<AppText>Account</AppText>
	</Screen>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
	<Tab.Navigator>
		<Tab.Screen name='Feed' component={Tweets} />
		<Tab.Screen name='Account' component={Account} />
	</Tab.Navigator>
);

export default function App() {
	return (
		<NavigationContainer>
			<TabNavigator />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({});
