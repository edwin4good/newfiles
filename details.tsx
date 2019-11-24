import React, { Component } from "react";
import LogoTitle from "../components/LogoTitle";

import DatePickerComponent from "../components/DatePickerComponent";
import CountryPicker from "../components/CountryPicker";
import RadioComponent from "../components/RadioComponent";
import { ScrollView, Text,StyleSheet, View,TextInput } from "react-native";
import Info_On_Accommodation from "../components/form/Info_On_Accommodation";
import Contact_Details from "../components/form/Contact_Details";
import Info_On_Applicant from "../components/form/Info_On_Applicant"
export default class Details extends Component {
	public render() {


		return <ScrollView>

			
			<View style={styles.container}>
		
			<Info_On_Applicant></Info_On_Applicant>
			
			

<View style={styles.container}>

	
</View>
<Text style={styles.title}>
    


  </Text>
	</View>
		</ScrollView>;
	}
}
const styles = StyleSheet.create({
	progressBar: {
	 height: 10,
	 width: '90%',
	 backgroundColor: 'white',
	 borderColor: '#000',
	 borderWidth: 2,
	 alignItems: "center",
	 borderRadius: 15
	 },
	 inputBox: {
    width:500,
    height:50,
   backgroundColor:'red',
    borderRadius: 15,
    paddingHorizontal:16,
    fontSize:16,
    color:'#231d1d',
    marginVertical: 10,
  },
   container: {
    flex: 1,
         justifyContent: 'center',
         backgroundColor:'rgba(51, 161, 255, 1.0)',
         paddingLeft: 60,
         paddingRight:60,
         alignSelf: 'stretch',
    
 },
   title: {
	  color: "#000",
	  textAlign: "center",
	  fontSize: 100
	  
	},
	container1 : {
    flexShrink: 1,
    justifyContent:"center",
    alignItems: "flex-start"
  
  },
  });
