import React, { useState } from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from './app/components/Screen';
import AppText from './app/components/AppText';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';

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
const FeedNavigator = () => (
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
		<Tab.Screen name='Feed' component={FeedNavigator} />
		<Tab.Screen name='Account' component={Account} />
	</Tab.Navigator>
);

export default function App() {
	return (
		<NavigationContainer theme={navigationTheme}>
			<AppNavigator />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({});
