import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';

const AppForm = ({ initialValues, onSubmit, validationSchema, children }) => {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}>
			{() => <>{children}</>}
		</Formik>
	);
};

const styles = StyleSheet.create({});

export default AppForm;
