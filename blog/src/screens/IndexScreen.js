import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

const IndexScreen = () => {
	const { state, addBlogPost } = useContext(Context);

	return (
		<View>
			<Text>Hello from IndexScreen</Text>
			<Button title='Add Post' onPress={addBlogPost} />
			<FlatList
				data={state}
				keyExtractor={(blog) => blog.title}
				renderItem={({ item }) => {
					return <Text>{item.title}</Text>;
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default IndexScreen;
