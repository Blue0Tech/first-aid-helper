import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Dimensions, Modal } from 'react-native';
import { WebView } from 'react-native-webview';
import { MaterialIcons, Ionicons, Entypo } from '@expo/vector-icons';
import * as Speech from 'expo-speech';
import * as Linking from 'expo-linking';

export default class CPRChildren extends React.Component {
	constructor() {
		super();
		this.state = {
			isSpeaking : false,
			modalVisible : false,
			modal2Visible : false
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
	showVideo2=()=>{
		this.setState({
			modal2Visible : true
		});
	}
	hideVideo2=()=>{
		this.setState({
			modal2Visible : false
		});
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
					<TouchableOpacity onPress={()=>{this.speakContent(content)}} style={styles.icon}>
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
					<TouchableOpacity onPress={()=>{this.showVideo2()}} style={styles.icon}>
						<Entypo name="video" size={32} color="white" />
					</TouchableOpacity>
				</View>
				<Modal visible={this.state.modalVisible} transparent>
					<WebView
						style={{width:320,maxHeight:200, alignSelf:'center', marginTop : 45}}
						source={{uri:'https://www.youtube.com/embed/0aV9NS0ogiM?rel=0&autoplay=0&showinfo=0&controls=0'}}
					/>
					<TouchableOpacity onPress={()=>{this.hideVideo()}} style={styles.closeVideoButton}>
						<Text style={styles.closeVideoButtonText}>Close video</Text>
					</TouchableOpacity>
				</Modal>
				<Modal visible={this.state.modal2Visible} transparent>
					<WebView
						style={{width:320,maxHeight:200, alignSelf:'center', marginTop : 45}}
						source={{uri:'https://www.youtube.com/embed/avYRvVHAvfM?rel=0&autoplay=0&showinfo=0&controls=0'}}
					/>
					<TouchableOpacity onPress={()=>{this.hideVideo2()}} style={styles.closeVideoButton}>
						<Text style={styles.closeVideoButtonText}>Close video</Text>
					</TouchableOpacity>
				</Modal>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.introText}>{intro}</Text>
				<Text style={styles.contentText}>{content}</Text>
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
		resizeMode : 'center'
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
		marginBottom : 100
	},
	closeVideoButtonText : {
		color : 'white',
		borderWidth : 1,
		borderColor : 'white',
		fontSize : 24,
		padding : 10
	}
});