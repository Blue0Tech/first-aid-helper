import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Dimensions, Modal, Image } from 'react-native';
import { WebView } from 'react-native-webview';
import { MaterialIcons, Ionicons, Entypo } from '@expo/vector-icons';
import * as Speech from 'expo-speech';
import * as Linking from 'expo-linking';

export default class CPRAdults extends React.Component {
	constructor() {
		super();
		this.state = {
			isSpeaking : false,
			modalVisible : false
		}
	}
	callEmergency=()=>{
		Linking.openURL('tel:999');
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
	showVideo=()=>{
		this.setState({
			modalVisible : true
		});
	}
	hideVideo=()=>{
		this.setState({
			modalVisible : false
		});
	}
	render() {
		const title = 'CPR for adults';
		const intro = 'For adults, use CPR when they are not breathing, gasping occasionally or when they don\'t respond to questions or taps on the shoulder.';
		const content = [
			`Make sure it is safe for you to approach the victim.`,
			`Call for Help.`,
			`Check if the person is responsive (talk, touch, gently shake).If they respond, help them into a comfortable position. If not, move to next step.`,
			`Call emergency services (yourself or a helper) and ask for the ambulance.`,
			`Ask a helper to look for an defibrilator/AED.`,
			`Lay the person on their back carefully and kneel beside their chest. Gently tilt their head back, and lift their chin. Check for any obstructions in their mouth such as food or vomit, and remove it if it is loose.`,
			`Check if they are breathing by placing your ear next to their mouth for no more than 10 seconds. If they are not breathing properly or are gasping, perform CPR.`,
			`Perform 30 chest compressions; try to do two every second. Do this by placing one of your hands on top of the other and clasping them together, interlocking your fingers. With the heel of your hand and with straight arms, push hard and fast in the centre of the chest, slightly below the nipples. Try to push almost as deep as your pinkie finger's length, and let the chest rise fully between compressions without taking your hands off.`,
			`Perform 2 rescue breaths. To do this, make sure their mouth is clear, tilt their head back and lift their chin. Pinch their nose shut, place your mouth fully over theirs, and blow for about a second to make their chest rise. If their chest does not rise with the first breath, tilt the head again and try again. If again the chest doesn't rise, the person might be choking.`,
			`Repeat the chest compressions and rescue breaths until they are conscious or help arrives. If you cannot do rescue breaths, just do chest compressions.`
		];
		const contentFull = content.join('\n');
		return (
			<ScrollView contentContainerStyle={styles.container} style={styles.scrollViewStyle} persistentScrollbar={true}>
				<View style={styles.topBar}>
					<TouchableOpacity onPress={()=>{this.speakContent(contentFull)}} style={styles.icon}>
						<MaterialIcons name="keyboard-voice" size={32} color="white" />
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.back}
						onPress={()=>{this.goBack()}}
					>
						<Text style={styles.normalText}>Go Back</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={()=>{this.callEmergency()}} style={styles.icon}>
						<Ionicons name="call" size={32} color="white" />
					</TouchableOpacity>
					<TouchableOpacity onPress={()=>{this.showVideo()}} style={styles.icon}>
						<Entypo name="video" size={32} color="white" />
					</TouchableOpacity>
				</View>
				<Modal visible={this.state.modalVisible} transparent>
						<WebView
							style={{width:320,maxHeight:200, alignSelf:'center', marginTop : 45}}
							source={{uri:'https://www.youtube.com/embed/Q_QPCauSmvc?rel=0&autoplay=0&showinfo=0&controls=0'}}
						/>
						<TouchableOpacity onPress={()=>{this.hideVideo()}} style={styles.closeVideoButton}>
							<Text style={styles.closeVideoButtonText}>Close video</Text>
						</TouchableOpacity>
				</Modal>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.introText}>{intro}</Text>
				<Text style={styles.contentText}>{content[0]}</Text>
				<Text style={styles.contentText}>{content[1]}</Text>
				<Image style={styles.image} source={require("../media/callHelp.png")}/>
				<Text style={styles.contentText}>{content[2]}</Text>
				<Image style={styles.image} source={require("../media/checkOkay.png")}/>
				<Text style={styles.contentText}>{content[3]}</Text>
				<Image style={styles.image} source={require("../media/callEmergency.png")}/>
				<Text style={styles.contentText}>{content[4]}</Text>
				<Text style={styles.contentText}>{content[5]}</Text>
				<Image style={styles.image} source={require("../media/checkBreathing.png")}/>
				<Text style={styles.contentText}>{content[6]}</Text>
				<Text style={styles.contentText}>{content[7]}</Text>
				<Image style={styles.image} source={require("../media/chestCompressions.png")}/>
				<Text style={styles.contentText}>{content[8]}</Text>
				<Image style={styles.image} source={require("../media/rescueBreaths.png")}/>
				<Text style={styles.contentText}>{content[9]}</Text>
				<Image style={styles.image} source={require("../media/ambulanceArrive.png")}/>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	scrollViewStyle : {
		marginTop : 45,
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
		resizeMode : 'stretch'
	},
	topBar : {
		width : '100%',
		alignItems : 'center',
		alignContent : 'center',
		justifyContent : 'center',
		flexDirection : 'row',
		marginBottom : 10
	},
	icon : {
		margin : 20
	},
	closeVideoButton : {
		alignSelf : 'center',
		backgroundColor : 'black',
		width : 120,
		height : 120,
		alignItems : 'center',
		justifyContent : 'center',
		marginBottom : 30
	},
	closeVideoButtonText : {
		color : 'white',
		borderWidth : 1,
		borderColor : 'white',
		fontSize : 24,
		padding : 10
	}
});