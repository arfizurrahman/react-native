import React, { useState, useContext } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

const BlogPostForm = ({ onSubmit, initialValues }) => {
	const [title, setTitle] = useState(initialValues.title);
	const [content, setContent] = useState(initialValues.content);

	return (
		<View style={styles.container}>
			<Text style={styles.label}>Enter Title:</Text>
			<TextInput
				autoCapitalize='none'
				autoCorrect={false}
				style={styles.input}
				value={title}
				onChangeText={(value) => setTitle(value)}
			/>
			<Text style={styles.label}>Enter Content:</Text>
			<TextInput
				autoCapitalize='none'
				autoCorrect={false}
				style={styles.input}
				value={content}
				onChangeText={(value) => setContent(value)}
			/>
			<Button title='Save Post' onPress={() => onSubmit(title, content)} />
		</View>
	);
};

BlogPostForm.defaultProps = {
	initialValues: {
		title: '',
		content: '',
	},
};

const styles = StyleSheet.create({
	container: { padding: 20 },
	input: {
		fontSize: 18,
		borderRadius: 4,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 15,
		padding: 5,
	},
	label: {
		fontSize: 20,
		marginBottom: 5,
	},
});

export default BlogPostForm;
