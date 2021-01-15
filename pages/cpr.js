import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';

export default class CPR extends React.Component {
	goBack=()=>{
		this.props.navigation.navigate('Menu');
	}
	goAdult=()=>{
		this.props.navigation.navigate('CPRAdults');
	}
	goChildren=()=>{
		this.props.navigation.navigate('CPRChildren');
	}
	render() {
		const title = 'CPR';
		return (
			<ScrollView contentContainerStyle={styles.container} style={styles.scrollViewStyle}>
				<TouchableOpacity
					style={styles.back}
					onPress={()=>{this.goBack()}}
				>
					<Text style={styles.backText}>Go Back</Text>
				</TouchableOpacity>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.introText}>Are you performing CPR on an adult/teen or a small child/infant?</Text>
				<View style={styles.choiceView}>
					<TouchableOpacity style={styles.option} onPress={()=>{this.goAdult()}}>
						<Text style={styles.optionText}>Adult/teen</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.option} onPress={()=>{this.goChildren()}}>
						<Text style={styles.optionText}>Small child/infant</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	scrollViewStyle : {
		marginTop : 30,
		marginBottom : 30
	},
	container : {
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
	choiceView : {
		width : '100%',
		alignItems : 'center',
		alignContent : 'center',
		justifyContent : 'center',
		flexDirection : 'row',
		marginBottom : 10
	},
	option : {
		width : '48%',
		height : 40,
		borderColor : 'white',
		borderWidth : 1,
		margin : 5,
		alignItems : 'center',
		justifyContent : 'center'
	},
	optionText : {
		color : 'white',
		fontSize : 18
	},
	backText : {
		color : 'white'
	},
	introText : {
		color : 'white',
		margin : 10,
		fontSize : 24
	},
	contentText : {
		color : 'white',
		margin : 10,
		fontSize : 18
	},
	title : {
		color : 'white',
		fontSize : 30
	}
});