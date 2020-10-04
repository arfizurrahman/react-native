import React, { Fragment, useContext } from 'react';
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { ListItem, Text } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';

const TrackListScreen = ({ navigation }) => {
	const { state, fetchTracks } = useContext(TrackContext);

	return (
		<Fragment>
			<NavigationEvents onWillFocus={fetchTracks} />
			<Text h3>Track List Screen</Text>
			<FlatList
				data={state}
				keyExtractor={(item) => item._id}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('TrackDetail', { id: item._id })
							}>
							<ListItem bottomDivider>
								<ListItem.Content>
									<ListItem.Title>{item.name}</ListItem.Title>
								</ListItem.Content>
								<ListItem.Chevron />
							</ListItem>
						</TouchableOpacity>
					);
				}}
			/>
		</Fragment>
	);
};

const styles = StyleSheet.create({});

export default TrackListScreen;
