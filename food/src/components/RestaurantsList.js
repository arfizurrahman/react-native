import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import RestaurantDetail from './RestaurantDetail';

const RestaurantsList = ({ title, restaurants }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={restaurants}
				keyExtractor={(restaurant) => restaurant.id}
				renderItem={({ item }) => {
					return <RestaurantDetail restaurant={item} />;
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: { marginBottom: 15 },
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		marginLeft: 15,
		marginBottom: 5,
	},
});

export default RestaurantsList;
