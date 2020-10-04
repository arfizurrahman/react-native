import React, { Fragment } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TrackListScreen = ({ navigation }) => {
	return (
		<Fragment>
			<Text>Hello from Track List Screen</Text>
			<Button
				title='Go to track detail'
				onPress={() => navigation.navigate('TrackDetail')}
			/>
		</Fragment>
	);
};

const styles = StyleSheet.create({});

export default TrackListScreen;
