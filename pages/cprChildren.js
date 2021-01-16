import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import * as Speech from 'expo-speech';
import * as Linking from 'expo-linking';

export default class CPRChildren extends React.Component {
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
		this.props.navigation.navigate('CPR');
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
		const title = 'CPR for children';
		const intro = 'For children, use CPR when they are not breathing properly and not responding.';
		const content =
`Check that the area is safe, and you won't be put in danger trying to help the other person. Ask if they are okay, or for infants, flick their foot.

Call emergency services (999 in the UK, 911 in the US, 112 internationally) and ask for the ambulance or ask someone else to. Ask a bystander to look for a AED/defibrilator.

Lay the person on their back carefully and kneel beside their chest. Open their mouth to check for any obstructions such as food or vomit, and remove it if it is loose.

Check if they are breathing by placing your ear next to their mouth for no longer than 10 seconds. Changes in an infant's breathing is normal. Keep monitoring their breathing, and if they stop breathing, perform CPR.

Perform 2 rescue breaths. To do this, make sure their mouth is clear, tilt their head back and lift their chin. pinch their nose shut if they are a child, place your mouth fully over theirs, and breath into their mouth. If they are an infant, place your mouth over their mouth and nose and blow for a second to make their chest rise, then do two rescue breaths. If they are still unresponsive, begin chest compressions.

Perform 30 chest compressions, try to do two every second. Do this by placing one of your hands for a child or two of your fingers for an infant slightly below their nipples. Push hard and fast, as deep as half of your pinkie finger's length.`
		const contentEnd = 'Repeat the chest compressions until they are conscious or help arrives.';
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
						<Ionicons name="call" size={32} color="white" />
					</TouchableOpacity>
				</View>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.introText}>{intro}</Text>
				<Image style={styles.image} source={require('../media/chestCompressions.png')}/>
				<Image style={styles.image} source={require('../media/rescueBreaths.png')}/>
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