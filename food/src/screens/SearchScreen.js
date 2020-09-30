import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';
import RestaurantsList from '../components/RestaurantsList';

const SearchScreen = () => {
	const [term, setTerm] = useState('');
	const [searchApi, restaurants, errorMessage] = useRestaurants();

	const filterRestaurantsByPrice = (price) => {
		return restaurants.filter((r) => r.price === price);
	};

	return (
		<View>
			<SearchBar
				term={term}
				onTermChange={setTerm}
				onTermSubmit={() => searchApi(term)}
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<Text>We have found {restaurants.length} restaurants.</Text>
			<RestaurantsList
				restaurants={filterRestaurantsByPrice('$')}
				title='Cost Effective'
			/>
			<RestaurantsList
				restaurants={filterRestaurantsByPrice('$$')}
				title='Bit Pricier'
			/>
			<RestaurantsList
				restaurants={filterRestaurantsByPrice('$$$')}
				title='Big Spender'
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
