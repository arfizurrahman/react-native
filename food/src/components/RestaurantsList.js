import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RestaurantsList = ({ title, restaurants }) => {
	return (
		<View>
			<Text style={styles.title}>{title}</Text>
			<Text>Restaurants: {restaurants.length}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 18,
		fontWeight: 'bold',
	},
});

export default RestaurantsList;
