import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

const Screen = ({ children, style }) => {
	return (
		<SafeAreaView style={[styles.screen]}>
			<View style={style}>{children}</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	screen: {
		paddingTop: Constants.statusBarHeight,
		flex: 1,
	},
});

export default Screen;
