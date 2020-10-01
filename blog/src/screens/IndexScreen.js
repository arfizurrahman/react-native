import React, { useContext, useEffect } from 'react';
import {
	View,
	Text,
	FlatList,
	Button,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
	const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

	useEffect(() => {
		getBlogPosts();

		const listener = navigation.addListener('didFocus', () => {
			getBlogPosts();
		});

		return () => {
			listener.remove();
		};
	}, []);

	return (
		<View>
			<FlatList
				data={state}
				keyExtractor={(blogPost) => blogPost.id.toString()}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() => navigation.navigate('Show', { id: item.id })}>
							<View style={styles.row}>
								<Text style={styles.title}>{item.title}</Text>
								<TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
									<Feather style={styles.icon} name='trash' />
								</TouchableOpacity>
							</View>
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

IndexScreen.navigationOptions = ({ navigation }) => {
	return {
		headerRight: () => (
			<TouchableOpacity onPress={() => navigation.navigate('Create')}>
				<Feather name='plus' style={styles.headerIcon} size={30} />
			</TouchableOpacity>
		),
	};
};

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 20,
		borderBottomWidth: 1,
		borderBottomColor: '#C7C6C1',
	},
	title: {
		fontSize: 18,
	},
	icon: {
		fontSize: 24,
	},
	headerIcon: {
		marginRight: 15,
	},
});

export default IndexScreen;
