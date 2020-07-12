import React, { Component } from "react";
import { Text, View, TextInput, ImageBackground, Button } from "react-native";
// import Button from "react-native-button";
import back from "../assets/back.png";
import { globalStyles } from "../styles/global";

class Verify extends Component {
  state = {};
  handleVerify = () => {
    this.props.navigation.navigate("welcome");
  };
  render() {
    return (
      <View style={globalStyles.container}>
        <ImageBackground style={globalStyles.image} source={back}>
          <View style={globalStyles.center}>
            <TextInput
              style={globalStyles.textInput}
              onChangeText={this.handleChange}
              keyboardType="numeric"
              placeholder="Enter otp here"
            ></TextInput>
            <View style={globalStyles.button}>
              <Text style={globalStyles.buttonText} onPress={this.handleVerify}>
                Verify
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Verify;
