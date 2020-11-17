import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';

import Card from '../components/Card';
import colors from '../config/colors';
import listingsApi from '../api/listings';
import routes from '../navigation/routes';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from '../hooks/useApi';

const ListingsScreen = ({ navigation }) => {
	const getListingsApi = useApi(listingsApi.getListings);

	useEffect(() => {
		getListingsApi.request();
	}, []);

	return (
		<>
			<ActivityIndicator visible={getListingsApi.loading} />
			<Screen style={styles.screen}>
				{getListingsApi.error && (
					<>
						<AppText>Could't retrieve the listings.</AppText>
						<AppButton
							title='Retry'
							onPress={getListingsApi.request}></AppButton>
					</>
				)}
				<FlatList
					data={getListingsApi.data}
					keyExtractor={(listing) => listing.id.toString()}
					renderItem={({ item }) => (
						<Card
							title={item.title}
							subTitle={'$' + item.price}
							imageUrl={item.images[0].url}
							thumbnailUrl={item.images[0].thumbnailUrl}
							onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
						/>
					)}
				/>
			</Screen>
		</>
	);
};

const styles = StyleSheet.create({
	screen: {
		padding: 20,
		backgroundColor: colors.light,
	},
});

export default ListingsScreen;
