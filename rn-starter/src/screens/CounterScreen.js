import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Buttton, Button } from 'react-native';

const reducer = (state, action) => {
	switch (action.type) {
		case 'increase_count':
			return { ...state, count: state.count + 1 };
		case 'decrease_count':
			return { ...state, count: state.count - 1 };
		default:
			return state;
	}
};

const CounterScreen = () => {
	const [counter, dispatch] = useReducer(reducer, { count: 0 });

	return (
		<View>
			<Button
				title='Increase'
				onPress={() => {
					dispatch({ type: 'increase_count' });
				}}
			/>
			<Button
				title='Decrease'
				onPress={() => {
					dispatch({ type: 'decrease_count' });
				}}
			/>
			<Text>Current Count: {counter.count}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default CounterScreen;
