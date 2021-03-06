import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Dimensions, Modal, Image } from 'react-native';
import { WebView } from 'react-native-webview';
import { MaterialIcons, Ionicons, Entypo } from '@expo/vector-icons';
import * as Speech from 'expo-speech';
import * as Linking from 'expo-linking';

export default class HeavyBleeding extends React.Component {
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
		const title = 'Stopping heavy bleeding';
		const intro = 'This information only applies to heavy bleeding, when a lot of blood is leaving the wound or the wound is in a dangerous area.';
		const content = [
			`Help the person remain calm throughout. Try and raise the injured part of the body vertically above their heart.`,
			`If there may be internal bleeding, or a person is bleeding profusely, look out for symptoms of shock, which include cold, clammy skin, a weakened pulse, and loss of consciousness, and if the person is experiencing these symptoms, you should call emergency services.`,
			`Remove obvious debris from the wound, such as sticks and grass, unless it is embedded deeply in the body - this could do more harm than good. Don't attempt to properly clean the wound; this can be done in hospital. When you cover the wound, don't uncover the wound to check on it - this could cause the wound to start bleeding again.`,
			`Hold pressure directly on the wound. You can do this by making a tourniquet. To make a tourniquet, you can use a clean cloth or towel. Wrap it around the wound and apply direct pressure by tightening (don't make breathing difficult) or pushing down on the wound. Keep doing this until medical help arrives.`,
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
							source={{uri:'https://www.youtube.com/embed/NxO5LvgqZe0?rel=0&autoplay=0&showinfo=0&controls=0'}}
						/>
						<TouchableOpacity onPress={()=>{this.hideVideo()}} style={styles.closeVideoButton}>
							<Text style={styles.closeVideoButtonText}>Close video</Text>
						</TouchableOpacity>
				</Modal>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.introText}>{intro}</Text>
				<Text style={styles.contentText}>{content[0]}</Text>
				<Image style={styles.image} source={require("../media/raiseInjuryAboveHeart.png")}/>
				<Text style={styles.contentText}>{content[1]}</Text>
				<Image style={styles.image} source={require("../media/callEmergency.png")}/>
				<Text style={styles.contentText}>{content[2]}</Text>
				<Text style={styles.contentText}>{content[3]}</Text>
				<Image style={styles.image} source={require("../media/directPressureOnWound.png")}/>
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