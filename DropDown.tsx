import React, { Component } from "react";
import { Platform, StyleSheet, View, Button, Picker, Alert } from "react-native";

export default class DropDown extends Component {

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

           <Picker.Item label="Single" value="Single" />
           <Picker.Item label="Married Since" value="Married Since" />
           <Picker.Item label="Civil Union Since" value="Civil Union Since" />
           <Picker.Item label="Divorced Since" value="Divorced Since" />
           <Picker.Item label="Widowed Since" value="Widowed Since" />
           

         </Picker>

        
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

    textinput:{
        fontSize: 10,
        alignSelf: 'stretch',
       // height: 4,
        marginBottom: 30,
        color:'#199187',
        borderColor:'#f8f8f8',
        borderBottomWidth: 1,


    },

    inputBox1: {
        width:300,
        height:50,
       backgroundColor:'white',
        borderRadius: 25,
        paddingHorizontal:16,
        fontSize:16,
        color:'#231d1d',
        marginVertical: 10,
      },
    inputBox:{
       width: 300,
       //height:21,
       backgroundColor:"white",
       borderRadius:25,
      // borderRightColor:'#199187',
       padding: 30,
       flexDirection: 'row',
       alignItems: 'center',
       height:50,
       justifyContent: 'space-between'


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

    button:{
        width:250,
        justifyContent:'center',
        backgroundColor:'rgba(51, 161, 255, 1.0)',
        marginVertical:10,
        borderRadius:25,
        paddingVertical:12,
        borderColor:'#fff',
        borderWidth: 7
    },

    buttonText:{
       fontSize: 15,
       color:'#fff',
       textAlign:'center',
       fontWeight:"500",


   }

});