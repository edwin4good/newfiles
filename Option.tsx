import React, { Component } from "react";
//import react in our code.
import { View, StyleSheet } from "react-native";

import RadioForm, {
	RadioButton,
	RadioButtonInput,
	RadioButtonLabel
} from "react-native-simple-radio-button";
var radio_props = [
    { label: "Yes", value: 0 },
    { label: "NO", value: 1 },
	//{ label: "Other", value: 2 }
];
export default class Option extends Component {
	constructor(props) {
		super(props);

		//set value in state for initial date
		this.state = { initValue: 1 };
	}

	render() {
		return (
			<View style={styles.container}>
				<RadioForm
					radio_props={radio_props}
                    initial={0}
                    formHorizontal={true}
                    buttonColor={'#ff0000'}
                    buttonInnerColor={'red'}
                    animation={true}
					onPress={value => {
						this.setState({ value: value });
					}}
				></RadioForm>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
       //marginTop: 50,
    	padding: 16
	}
});
