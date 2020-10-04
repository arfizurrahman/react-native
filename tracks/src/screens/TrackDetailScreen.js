import React, { Fragment, useEffect, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';

const TrackDetailScreen = ({ navigation }) => {
	const { state } = useContext(TrackContext);
	const id = navigation.getParam('id');

	const track = state.find((t) => t._id === id);

	if (!track) {
		return null;
	}

	const intialCoords = track.locations[0].coords;

	return (
		<Fragment>
			<Text style={{ fontSize: 18 }}>{track.name}</Text>
			<MapView
				style={styles.map}
				initialRegion={{
					longitudeDelta: 0.01,
					latitudeDelta: 0.01,
					...intialCoords,
				}}>
				<Polyline coordinates={track.locations.map((loc) => loc.coords)} />
			</MapView>
		</Fragment>
	);
};

const styles = StyleSheet.create({
	map: {
		height: 300,
	},
});

export default TrackDetailScreen;
