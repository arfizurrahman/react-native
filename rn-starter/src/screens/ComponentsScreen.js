import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
	return (
		<View>
			<Text style={styles.textStyle}>Getting started with React native!</Text>
			<Text style={styles.subtitleStyle}>MMy name is Arfizur Rahman</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	titleStyle: {
		fontSize: 45,
		textAlign: 'center',
		marginTop: 20,
    },
    subtitleStyle:{
        fontSize: 20
    }
});

export default ComponentsScreen;
