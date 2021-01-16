import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import * as Speech from 'expo-speech';
import * as Linking from 'expo-linking';

export default class Seizures extends React.Component {
	constructor() {
		super();
		this.state = {
			isSpeaking : false
		}
	}
	callEmergency=()=>{
		Linking.openURL('tel:+441213502160');
	}
	goBack=()=>{
		this.props.navigation.navigate('Menu');
	}
	speakContent=(text)=>{
		if(this.state.isSpeaking==false) {
			Speech.speak(text,{
				rate : 0.8,

			});	
			this.setState({
				isSpeaking : true
			});
		} else {
			Speech.stop();
			this.setState({
				isSpeaking : false
			});
		}
	}
	render() {
		const title = 'Helping someone having a seizure';
		const intro = 'If you haven\'t witnessed this person have a seizure before which turned out to be not serious, then call emergency services. If the seizure is lasing longer than five minutes, call emergency services.';
		const content = `Only move the person if they are in danger, for example on a busy road or by a hot cooker.

Cushion their head if they are on the ground.

Loosen any tight clothing around their neck, such as ties and collars, to help them breathe. Do not put your hand in their mouth to remove anything unless they are choking at the same time.

If they are in a wheelchair, put the brakes on and leave seatbelts or harnesses on.

After they stop having convulsions and stop shaking, turn them onto their side, like in the picture.

Stay with them and calmly talk to them until they are fine.

Attempt to note the time the seizure started and finished.`;
		return (
			<ScrollView contentContainerStyle={styles.container} style={styles.scrollViewStyle} persistentScrollbar={true}>
				<View style={styles.topBar}>
					<TouchableOpacity onPress={()=>{this.speakContent(content)}}>
						<MaterialIcons name="keyboard-voice" size={32} color="white" />
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.back}
						onPress={()=>{this.goBack()}}
					>
						<Text style={styles.normalText}>Go Back</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={()=>{this.callEmergency()}}>
						<Ionicons name="call" size={32} color="white" /><Text style={styles.normalText}>Emergency</Text>
					</TouchableOpacity>
				</View>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.introText}>{intro}</Text>
				<Image style={styles.image} source={require('../media/recoveryPosition.png')} />
				<Text style={styles.contentText}>{content}</Text>
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
	normalText : {
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
	},
	image : {
		width : Dimensions.get('window').width*0.9,
		height : Dimensions.get('window').width*0.7,
		resizeMode : 'center'
	},
	topBar : {
		width : '100%',
		alignItems : 'center',
		alignContent : 'center',
		justifyContent : 'center',
		flexDirection : 'row',
		marginBottom : 10
	}
});