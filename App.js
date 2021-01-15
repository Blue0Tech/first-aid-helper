import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainApp from './MainApp.js';

export default function App() {
	return (
		<View style={styles.container}>
			<MainApp/>
		</View>
	)
}

const styles = StyleSheet.create({
	container : {
		flex : 1,
		backgroundColor : '#303030'
	}
});