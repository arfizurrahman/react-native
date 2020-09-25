import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
	return <Text style={styles.text}>Hey there!</Text>;
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
		marginTop: 10,
		textAlign: 'center',
	},
});

export default HomeScreen;
