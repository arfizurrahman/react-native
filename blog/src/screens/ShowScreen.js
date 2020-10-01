import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Context } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
	const { state } = useContext(Context);

	const blogPost = state.find((post) => post.id == navigation.getParam('id'));

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{blogPost.title}</Text>
			<Text style={styles.content}>{blogPost.content}</Text>
		</View>
	);
};

ShowScreen.navigationOptions = ({ navigation }) => {
	return {
		headerRight: () => (
			<TouchableOpacity
				onPress={() =>
					navigation.navigate('Edit', { id: navigation.getParam('id') })
				}>
				<Feather name='edit-3' style={styles.headerIcon} size={26} />
			</TouchableOpacity>
		),
	};
};

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 10,
	},
	content: {
		fontSize: 16,
	},
	headerIcon: {
		marginRight: 10,
	},
});

export default ShowScreen;
