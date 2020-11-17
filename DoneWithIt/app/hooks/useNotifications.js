import React, { useEffect } from 'react';
import { Platform, Vibration } from 'react-native';

import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

import expoPushTokensApi from '../api/expoPushTokens';
import navigation from '../navigation/rootNavigation';

export default useNotifications = (notificationListener) => {
	useEffect(() => {
		registerForPushNotifications();

		const subscription1 = Notifications.addNotificationReceivedListener(
			(notification) => {
				alert(notification);
			}
		);
		const subscription2 = Notifications.addNotificationResponseReceivedListener(
			(response) => {
				alert(response);
			}
		);

		return () => {
			subscription1.remove();
			subscription2.remove();
		};
	}, []);

	const registerForPushNotifications = async () => {
		try {
			if (Constants.isDevice) {
				const settings = await Notifications.getPermissionsAsync();
				if (!settings.granted) {
					alert('Failed to get push token for push notification!');
					return;
				}
				const token = await Notifications.getExpoPushTokenAsync();
				console.log(token);
				expoPushTokensApi.register(token);
			} else {
				alert('Must use physical device for Push Notifications');
			}

			// if (Platform.OS === 'android') {
			// 	Notifications.setNotificationChannelAsync('default', {
			// 		name: 'default',
			// 		importance: Notifications.AndroidImportance.MAX,
			// 		vibrationPattern: [0, 250, 250, 250],
			// 		lightColor: '#FF231F7C',
			// 	});
			// }
		} catch (error) {
			console.log('Error getting a push token', error);
		}
	};
};
