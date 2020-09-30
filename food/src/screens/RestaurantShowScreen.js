import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import yelp from '../api/yelp';

const RestaurantShowScreen = ({ navigation }) => {
	const [restaurant, setRestaurant] = useState(null);
	const [errorMessage, setErrorMessage] = useState('');
	const id = navigation.getParam('id');

	useEffect(() => {
		getResult(id);
	}, []);

	const getResult = async (id) => {
		try {
			const response = await yelp.get(`/${id}`);
			setRestaurant(response.data);
			setErrorMessage('');
		} catch (err) {
			setErrorMessage('Something went wrong');
		}
	};

	if (!restaurant) {
		return null;
	}

	return (
		<View>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<Text>{restaurant.name}</Text>
			<FlatList
				data={restaurant.photos}
				keyExtractor={(photo) => photo}
				renderItem={({ item }) => {
					return <Image style={styles.image} source={{ uri: item }} />;
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	image: {
		height: 200,
		width: 300,
	},
});

export default RestaurantShowScreen;
