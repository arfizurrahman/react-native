import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const Map = () => {
	return <MapView style={styles.map} initialRegion={{latitude: 22.356360, longitude: 91.847900, latitudeDelta: 0.01, longitudeDelta: 0.01}}/>;
};

const styles = StyleSheet.create({
	map: {
		height: 300,
	},
});

export default Map;
