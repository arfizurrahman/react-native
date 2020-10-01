import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
	const { state, editBlogPost } = useContext(Context);
	const id = navigation.getParam('id');
	const blogPost = state.find((post) => post.id == id);

	const { addBlogPost } = useContext(Context);

	return (
		<BlogPostForm
			initialValues={{ title: blogPost.title, content: blogPost.content }}
			onSubmit={(title, content) => {
				editBlogPost(id, title, content, () => navigation.pop());
			}}
		/>
	);
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

export default EditScreen;
