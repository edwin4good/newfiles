import React, { Component } from "react";
import { Platform, StyleSheet, View, Button, Picker, Alert } from "react-native";

export default class CountryPicker extends Component {

  constructor(props){
     super(props);
     this.state={
       PickerSelectedVal : ''
     }
   }

   getSelectedPickerValue=()=>{
     // Alert.alert("Selected country is : " +this.state.PickerSelectedVal);
    }



  render() {
    return (
      <View >
      <Picker
           selectedValue={this.state.PickerSelectedVal}
           onValueChange={(itemValue, itemIndex) => this.setState({PickerSelectedVal: itemValue})} >

           <Picker.Item label="Nigeria" value="Nigeria" />
           <Picker.Item label="USA" value="USA" />
           <Picker.Item label="China" value="China" />
           <Picker.Item label="Russia" value="Russia" />
           <Picker.Item label="United Kingdom" value="United Kingdom" />
           <Picker.Item label="France" value="France" />

         </Picker>

        
      </View>
    );
  }
  
}