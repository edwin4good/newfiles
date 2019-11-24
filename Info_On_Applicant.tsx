import React, { Component } from "react";
import { ScrollView, Text, StyleSheet, View, TextInput, TouchableOpacity, StatusBar } from "react-native";
import CountryPicker from "../CountryPicker";
import DropDown from "../DropDown";
import Acomodation from "../Acomodation";
import SmoothPinCodeInput from "react-native";
import TravelDoc from "../TravelDoc";
import Option from "../Option";

import DatePickerComponent from "../DatePickerComponent";
export default class Info_On_Applicant extends Component {
    [x: string]: any;
	public render() {
		return (
			<View>
                <StatusBar backgroundColor="#264d9b" barStyle="light-content" />
                <Text style={styles.headerText}>Information On Applicante</Text>

                <Text style={styles.text}>Last Name</Text>
<TextInput style={styles.inputBox}  placeholder="Last Name" 
  underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="#231d1d"
  />

<Text style={styles.text}>First Name</Text>
<TextInput style={styles.inputBox}  placeholder="First Name" 
  underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="#231d1d"
  />
  
  <Text style={styles.text}>Date of Birth</Text>
   <View style={styles.inputBox2}>
					<DatePickerComponent/>
				</View>

<Text style={styles.text}>Place of Birth</Text>
<TextInput style={styles.inputBox}  placeholder="Place of Birth" 
  underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="#231d1d"
  />


<Text style={styles.text}>Place of Residence</Text>
<TextInput style={styles.inputBox}  placeholder="Place of residence" 
  underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="#231d1d"
  />

<Text style={styles.text}>Nationality</Text>
<View style={styles.inputBox1}>
					<CountryPicker />
				</View>

 <Text style={styles.text}>Marital Status</Text>
                <View style={styles.inputBox1}>
					<DropDown />
 
				</View>


<Text style={styles.text}>Types Of Travel Documents</Text>  

<View style={styles.inputBox1}>
					<TravelDoc />

</View>



<Text style={styles.text}>Number of Travelling Documents</Text>
<TextInput style={styles.inputBox}  placeholder="Number of Travelling Documents" 
  underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="#231d1d"
  />

<Text style={styles.text}>Date Of Issue</Text>
<TextInput style={styles.inputBox}  placeholder="Date Of Issue" 
  underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="#231d1d"
  />
  <Text style={styles.text}>Valid Through</Text>
<TextInput style={styles.inputBox}  placeholder="Valid Through" 
  underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="#231d1d"
  />
  <Text style={styles.headerText}>Current Address and Contact Details</Text>

  <Text style={styles.text}>Street Address</Text>
<TextInput style={styles.inputBox}  placeholder="Street Address" 
  underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="#231d1d"
  />

<Text style={styles.text}>Street Number</Text>
<TextInput style={styles.inputBox}  placeholder="Street Number" 
  underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="#231d1d"
  />

<Text style={styles.text}>PostCode</Text>
<TextInput style={styles.inputBoxp}  placeholder="PostCode" 
  underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="#231d1d"
  />

<Text style={styles.text}>City</Text>
<TextInput style={styles.inputBox}  placeholder="City" 
  underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="#231d1d"
  />

<Text style={styles.text}>Email</Text>
<TextInput style={styles.inputBox}  placeholder="Email" 
  underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="#231d1d"
  />

<Text style={styles.text}>Mobile Number</Text>
<TextInput style={styles.inputBox}  placeholder="Mobile Number" 
  underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="#231d1d"
  />

<Text style={styles.text}>Telephone Number</Text>
<TextInput style={styles.inputBox}  placeholder="Telephone Number" 
  underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="#231d1d"
  />


<Text style={styles.headerText}>Info On Applicant Spouse and Reg Partner</Text>


<Text style={styles.text}>Last Name</Text>
<TextInput style={styles.inputBox}  placeholder="Last Name" 
  underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="#231d1d"
  />

<Text style={styles.text}>First Name</Text>
<TextInput style={styles.inputBox}  placeholder="First Name" 
  underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="#231d1d"
  />
  
  <Text style={styles.text}>Date of Birth</Text>
   
					<DatePickerComponent/>
				

<Text style={styles.text}>Place of Birth</Text>
<TextInput style={styles.inputBox}  placeholder="Place of Birth" 
  underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="#231d1d"
  />


<Text style={styles.text}>Place of Residence</Text>
<TextInput style={styles.inputBox}  placeholder="Place of residence" 
  underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="#231d1d"
  />

<Text style={styles.text}>Country Of Birth</Text>
<View style={styles.inputBox1}>
					<CountryPicker />
				</View>

 <Text style={styles.text}>Current Nationality</Text>
<View style={styles.inputBox1}>
					<CountryPicker />
				</View>
  

  <Text style={styles.headerText}>Info On Applicant Children</Text>

  <Text style={styles.text}>Last Name</Text>
<TextInput style={styles.inputBox}  placeholder="Last Name" 
  underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="#231d1d"
  />

<Text style={styles.text}>First Name</Text>
<TextInput style={styles.inputBox}  placeholder="First Name" 
  underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="#231d1d"
  />
  
  <Text style={styles.text}>Date of Birth</Text>
   <View style={styles.inputBox2}>
					<DatePickerComponent/>
				</View>

<Text style={styles.text}>Place of Birth</Text>
<TextInput style={styles.inputBox}  placeholder="Place of Birth" 
  underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="#231d1d"
  />




<Text style={styles.text}>Nationality</Text>
<View style={styles.inputBox1}>
					<CountryPicker />
				</View>

                <Text style={styles.text}>Place of Residence</Text>
<TextInput style={styles.inputBox}  placeholder="Place of residence" 
  underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="#231d1d"
  />


<Text style={styles.headerText}>Info On Applicant Parents</Text>

<Text style={styles.text1}>Father</Text>

<Text style={styles.text}>First Name</Text>
<TextInput style={styles.inputBox}  placeholder="First Name" 
  underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="#231d1d"
  />
  
  <Text style={styles.text}>Date of Birth</Text>
   <View style={styles.inputBox2}>
					<DatePickerComponent/>
				</View>

<Text style={styles.text}>Place of Birth</Text>
<TextInput style={styles.inputBox}  placeholder="Place of Birth" 
  underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="#231d1d"
  />




<Text style={styles.text}>Nationality</Text>
<View style={styles.inputBox1}>
					<CountryPicker />
				</View>

                <Text style={styles.text}>Place of Residence</Text>
<TextInput style={styles.inputBox}  placeholder="Place of residence" 
  underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="#231d1d"
  />



<Text style={styles.text1}>Mother</Text>

<Text style={styles.text}>First Name</Text>
<TextInput style={styles.inputBox}  placeholder="First Name" 
  underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="#231d1d"
  />
  
  <Text style={styles.text}>Date of Birth</Text>
   <View style={styles.inputBox2}>
					<DatePickerComponent/>
				</View>

<Text style={styles.text}>Place of Birth</Text>
<TextInput style={styles.inputBox}  placeholder="Place of Birth" 
  underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="#231d1d"
  />




<Text style={styles.text}>Nationality</Text>
<View style={styles.inputBox1}>
					<CountryPicker />
				</View>

                <Text style={styles.text}>Place of Residence</Text>
<TextInput style={styles.inputBox}  placeholder="Place of residence" 
  underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="#231d1d"
  />

<Text style={styles.text1}>Have You Been To Germany </Text>
					<Option />

<Text style={styles.text}>Intended Place To Stay In Germany</Text>
<TextInput style={styles.inputBox}  placeholder="Place To Stay" 
  underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="#231d1d"
  /> 
				
  <Text style={styles.text}>Street Address</Text>
<TextInput style={styles.inputBox}  placeholder="Street Address" 
  underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="#231d1d"
  />

<Text style={styles.text}>Street Number</Text>
<TextInput style={styles.inputBox}  placeholder="Street Number" 
  underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="#231d1d"
  />

<Text style={styles.text}>PostCode</Text>
<TextInput style={styles.inputBoxp}  placeholder="PostCode" 
  underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="#231d1d"
  />

<Text style={styles.text}>City</Text>
<TextInput style={styles.inputBox}  placeholder="City" 
  underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="#231d1d"
  />


<Text style={styles.text}>How will You Be Accomodated</Text>

<View style={styles.inputBox1}>
					<Acomodation/>

</View>

<Text style={styles.text}>Do Your Intend To Keep Your Permanent Residence Outside Of Germany </Text>
					<Option />

                    <Text style={styles.text}>If Yes Where</Text>
<TextInput style={styles.inputBox}  placeholder="If Yes Where" 
  underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor="#231d1d"
  />          

                <TouchableOpacity style={styles.button}>
					<Text style ={styles.buttonText}>Next</Text>
					</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'rgba(51, 161, 255, 1.0)',
        paddingLeft: 60,
        paddingRight:60,
        alignSelf: 'stretch',
   

    },
    header: {

       fontSize: 24,
       color: '#fff',
       paddingBottom: 10,
       marginBottom: 40,
       //borderBottomColor: '#199187',
       //borderBottomWidth: 1,

    },
    headerText: {  
        fontSize: 20,  
        textAlign: "center",  
        margin: 10,  
        fontWeight: "bold"  
    },

    textinput:{
        fontSize: 10,
        alignSelf: 'stretch',
       // height: 4,
       textAlign: 'center',
       borderWidth: 2, 
        marginBottom: 30,
        color:'#199187',
        borderColor:'#f8f8f8',
        borderBottomWidth: 1,


    },

    inputBox1: {
        width:300,
        textAlign: 'center',
        height:50,
        borderWidth: 2, 
       backgroundColor:'white',
        borderRadius: 25,
        paddingHorizontal:16,
        fontSize:10,
        color:'#231d1d',
        marginVertical: 10,
      },
      inputBoxp: {
        width:100,
        textAlign: 'center',
        height:50,
        borderWidth: 2, 
       backgroundColor:'white',
        borderRadius: 10,
        paddingHorizontal:16,
        fontSize:10,
        color:'#231d1d',
        marginVertical: 10,
      },
      inputBox2: {
        width:300,
        height:45,
        borderWidth: 2, 
        textAlign: 'center',
        //padding:30,
       backgroundColor:'white',
        borderRadius: 25,
        paddingHorizontal:16,
        fontSize:18,
        color:'#231d1d',
        marginVertical: 10,
      },
    inputBox:{
       width: 300,
       //height:21,
       borderWidth: 2, 
       textAlign: 'center',
       backgroundColor:"white",
       borderRadius:25,
      // borderRightColor:'#199187',
       //padding: 30,
       //flexDirection: 'row',
       alignItems: 'center',
       height:50,
       justifyContent: 'center'


   },
    undertext:{
       fontStyle:'normal',
        fontSize: 15,
        justifyContent: 'center',
        color:'#fff',
        marginVertical:7



    },

    text:{
       fontSize:20, 
       color:"white", 
       textAlign:"left"



    },
    text1:{
        fontSize:20, 
        color:"navy", 
        fontWeight: "bold" ,
        margin: 10,
        textAlign:"left"
 
 
 
     },
    button:{
        width:280,
        justifyContent:'center',
        backgroundColor:'rgba(51, 161, 255, 1.0)',
        marginVertical:10,
        borderRadius:25,
        paddingVertical:12,
        borderColor:'#fff',
        borderWidth: 7,
        paddingTop:10
    },

    buttonText:{
       fontSize: 15,
       color:'#fff',
       textAlign:'center',
       fontWeight:"500",


   }

});