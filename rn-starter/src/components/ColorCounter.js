import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorCounter = ({ color, onDecrease, onIncrease }) => {
	return (
		<View style={{ width: 200, marginTop: 15 }}>
			<Text>{color}</Text>
			<Button onPress={() => onIncrease()} title={`Increase ${color}`} />
			<View style={{marginTop: 5}}/>
			<Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
		</View>
	);
};

const styles = StyleSheet.create({});

export default ColorCounter;
