import React, { Component } from "react";
import { Text, View, TextInput, ImageBackground, Button } from "react-native";
// import Button from "react-native-button";
import back from "../assets/back.png";
import { globalStyles } from "../styles/global";
import { connect } from "react-redux";
import { userLoginAction } from "../Redux/Actions/UserLoginAction";

class Verify extends Component {
  state = {
    countryCode: this.props.sendOtp.countryCode,
    mobileNumber: this.props.sendOtp.mobileNumber,
    email1: "",
    userId: "",
    error: "",
    otp: "",
    userId: "",
    loading: false,
  };
  handleVerify = () => {
    this.props.navigation.navigate("preRegister");
  };
  render() {
    console.log(this.state);
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
const mapStateToProps = (state) => {
  return {
    sendOtp: state.SendOtp.SendOtp.mobileNumber,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    userLoginAction: (UserLogin) => dispatch(userLoginAction(UserLogin)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Verify);
