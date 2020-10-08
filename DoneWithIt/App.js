import React from 'react';
import {
	StyleSheet,
	SafeAreaView,
	Platform,
	StatusBar,
	View,
} from 'react-native';
import {
	useDimensions,
	useDeviceOrientation,
} from '@react-native-community/hooks';

export default function App() {
	const { landscape, portrait } = useDeviceOrientation();

	console.log('is orientation portrait: ', portrait);
	console.log('is orientation landscape: ', landscape);
	return (
		<SafeAreaView style={styles.container}>
			<View
				style={{
					backgroundColor: 'dodgerblue',
					width: '100%',
					height: landscape ? '100%' : '30%',
				}}></View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},
});
