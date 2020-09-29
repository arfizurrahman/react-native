import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlexScreen = () => {
	return (
		<View style={styles.parentView}>
			{/* <Text style={styles.textOne}>Child 1</Text>
			<Text style={styles.textTwo}>Child 2</Text>
			<Text style={styles.textThree}>Child 3</Text> */}
			<View style={styles.viewOne} />
			<View style={styles.viewTwo} />
			<View style={styles.viewThree} />
		</View>
	);
};

const styles = StyleSheet.create({
	parentView: {
		borderWidth: 1,
		height: 100,
		// alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	viewOne: { height: 50, width: 50, backgroundColor: 'red' },
	viewTwo: { height: 50, width: 50, backgroundColor: 'green', top: 50 },
	viewThree: { height: 50, width: 50, backgroundColor: 'purple' },
	textOne: {
		borderWidth: 1,
		borderColor: 'red',
		width: 100,
		// flex: 6,
		// alignSelf: 'center',
	},
	textTwo: {
		borderWidth: 1,
		width: 100,
		borderColor: 'red',
		top: 100,
		// ...StyleSheet.absoluteFill
		// flex: 2,
		// alignSelf: 'flex-end',
	},
	textThree: {
		borderWidth: 1,
		borderColor: 'red',
		width: 100,
		// flex: 2,
		// alignSelf: 'stretch',
	},
});

export default FlexScreen;
