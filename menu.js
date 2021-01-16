import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons'; 

export default class Menu extends React.Component {
	componentDidMount() {
		this.search('');
	}
	constructor() {
		super();
		this.state = {
			data : [
				{
					'id' : 0,
					'displayText' : 'Performing CPR',
					'screenName' : 'CPR',
					'keywords' : [
						'performing',
						'cpr',
						'heart',
						'cardio',
						'resuscitation',
						'pulmonary',
						'stopped',
						'breathing',
						'losing',
						'consciousness',
						'unconsciousness'
					]
				},
				{
					'id' : 1,
					'displayText' : 'Stopping heavy bleeding',
					'screenName' : 'HeavyBleeding',
					'keywords' : [
						'blood',
						'bleeding',
						'loss',
						'losing',
						'heavy',
						'stopping',
						'lots'
					]
				},
				{
					'id' : 2,
					'displayText' : 'Handling seizures',
					'screenName' : 'Seizures',
					'keywords' : [
						'shaking',
						'unconscious',
						'uncontrollable',
						'handling',
						'seizures',
						'shivering',
						'spasms',
						'spassing',
						'blackout',
						'fits'
					]
				}
			],
			searchData : [],
			searchText : ''
		};
	}
	itemPress=(id)=>{
		this.props.navigation.navigate(this.state.data[id].screenName);
	}
	search=async(text)=>{
		text = await text.toLowerCase();
		await this.setState({
			searchText : text
		});
		var searchData = [];
		for(var id in this.state.data) {
			var keywords = this.state.data[id].keywords;
			var searchText = await this.state.searchText.trim();
			var returnItem = false;
			if(searchText=='') {
				returnItem=true
			} else {
				for(var wordID in keywords) {
					if(keywords[wordID].includes(searchText)) {
						returnItem = true;
						break;
					};
				};
			};
			if(returnItem==true) {
				await searchData.push(this.state.data[id]);
			};
			await this.setState({
				searchData : searchData
			});
		}
	}
	clearSearchText=()=>{
		this.setState({
			searchText : ''
		});
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.searchView}>
					<FontAwesome name="search" size={24} color="white" style={styles.searchIconStyle} />
					<TextInput
						style={styles.searchBar}
						placeholder={"Search"}
						onChangeText={text=>this.search(text)}
						value={this.state.searchText}
					/>
					<TouchableOpacity onPress={()=>{this.clearSearchText(),this.search('')}}>
					<Entypo name="circle-with-cross" size={24} color="white" style={styles.searchIconStyle}/>
					</TouchableOpacity>
				</View>
				<FlatList
					data={this.state.searchData}
					renderItem={({item}) => 
						<View key={item.id}>
							<TouchableOpacity
								style={styles.item}
								onPress={()=>{this.itemPress(item.id)}}
							>
								<Text style={styles.text}>{item.displayText}</Text>
							</TouchableOpacity>
						</View>
					}
				/>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	container : {
		marginTop : 50,
		alignItems : 'center'
	},
	item : {
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
	},
	searchBar : {
		backgroundColor : '#606060',
		width : '70%',
		color : 'white',
		padding : 7
	},
	searchView : {
		width : '100%',
		alignItems : 'center',
		alignContent : 'center',
		justifyContent : 'center',
		flexDirection : 'row',
		marginBottom : 10
	},
	searchIconStyle : {
		padding : 5
	}
});