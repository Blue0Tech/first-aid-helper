import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class HeavyBleeding extends React.Component {
	goBack=()=>{
		this.props.navigation.navigate('Menu');
	}
	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.back}
					onPress={()=>{this.goBack()}}
				>
					<Text style={styles.text}>Go Back</Text>
				</TouchableOpacity>
				<Text style={styles.text}>Heavy Bleeding</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container : {
		marginTop : 30,
		alignItems : 'center'
	},
	back : {
		height : 55,
		margin : 5,
		borderColor : 'white',
		borderBottomWidth : 1,
		borderTopWidth : 1,
		padding : 5,
		justifyContent : 'center',
		alignItems : 'center'
	},
	text : {
		color : 'white'
	}
});