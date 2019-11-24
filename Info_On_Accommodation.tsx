import React, { Component } from "react";
import { ScrollView, Text, StyleSheet, View, TextInput } from "react-native";
import CountryPicker from "../CountryPicker";
export default class Info_On_Accommodation extends Component {
	public render() {
		return (
			<View>
				<Text
					style={{
						fontSize: 10,
						color: "red",
						textAlign: "left",
						marginTop: 10
					}}
				>
					Nationality
				</Text>
				<View style={styles.inputBox}>
					<CountryPicker />
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
		fontSize: 16,
		color: "#231d1d",
		marginVertical: 10
	}
});
