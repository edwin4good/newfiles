import React, { Component } from "react";
import { ScrollView, Text, StyleSheet, View, TextInput,Button } from "react-native";
import CountryPicker from "../CountryPicker";
import DatePickerComponent from "../DatePickerComponent";


var data = {
    "category" : [
    {
        id: 1,
        product: [{id : '1', type : 'ball'}] 
    },
    {
        id : 2,
        product :[{id : '2', type : 'pen'}]
    }
    ]
}
function findId(data, idToLookFor) {
    var categoryArray = data.category;
    for (var i = 0; i < categoryArray.length; i++) {
        if (categoryArray[i].id == idToLookFor) {
            return(categoryArray[i].product);
        }
    }
}

export default class Contact_Details extends Component {
	
	public render() {
		
		var item = findId(data, 1);
		return (
			<View>
				<Button
					title="User 1"
					onPress={()=> console.log(item)}
				/>
				<Text
					style={{
						fontSize: 10,
						color: "red",
						textAlign: "left",
						marginTop: 10
					}}
				>
					Lastname: 
				</Text>
				<TextInput 
					style={styles.inputBox}
					underlineColorAndroid="rgba(0,0,0,0)"
					placeholder= "LastName" 
					placeholderTextColor="#231d1d"
					
				/>
				<Text
					style={{
						fontSize: 10,
						color: "red",
						textAlign: "left",
						marginTop: 10
					}}
				>
					FirstName:
				</Text>
				<TextInput
					style={styles.inputBox}
					underlineColorAndroid="rgba(0,0,0,0)"
					placeholder="First name "
					placeholderTextColor="#231d1d"
				/>
				<Text
					style={{
						fontSize: 10,
						color: "red",
						textAlign: "left",
						marginTop: 10
					}}
				>
					City of Birth:
				</Text>
				<TextInput
					style={styles.inputBox}
					underlineColorAndroid="rgba(0,0,0,0)"
					placeholder="city "
					placeholderTextColor="#231d1d"
				/>
				<Text
					style={{
						fontSize: 10,
						color: "red",
						textAlign: "left",
						marginTop: 10
					}}
				>
					Nationalit
				</Text>
				<View style={styles.inputBox}>
					<CountryPicker />
				</View>
				<Text
					style={{
						fontSize: 10,
						color: "red",
						textAlign: "left",
						marginTop: 10
					}}
				>
					Date of Birth
				</Text>
				<View style={styles.container}>
					<DatePickerComponent></DatePickerComponent>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	inputBox: {
		width: 500,
		height: 50,
		backgroundColor: "red",
		borderRadius: 15,
		paddingHorizontal: 16,
		//fontSize: 16,
		color: "#231d1d",
		marginVertical: 10
	},
	container: {
		flex: 1,
		width: 500,
		paddingHorizontal: 16,
		justifyContent: "center",
		marginTop: 10,
		padding: 6
	}
});
