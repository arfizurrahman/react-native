import React, { useState } from 'react';
import { StyleSheet, Switch, TextInput } from 'react-native';
import AppPicker from './app/components/AppPicker';

import AppTextInput from './app/components/AppTextInput';
import Screen from './app/components/Screen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import LoginScreen from './app/screens/LoginScreen';

export default function App() {
	return <ListingEditScreen />;
}

const styles = StyleSheet.create({});
