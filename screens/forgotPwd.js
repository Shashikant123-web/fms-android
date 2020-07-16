import React, { Component } from "react";
import axios from "axios";
import { globalStyles } from "../styles/global";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
// import Button from "react-native-button";
import google from "../assets/google.png";
import facebook from "../assets/fb.png";
import {
  Text,
  View,
  TextInput,
  Button,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import back from "../assets/back.png";

const header = {
  "x-api-key": " $2a$10$AIUufK8g6EFhBcumRRV2L.AQNz3Bjp7oDQVFiO5JJMBFZQ6x2/R/2",
};
class ForgotPwd extends Component {
  state = {
    mobileNumber: "",
    countryCode: "91",
    otp: "",
    status: false,
  };
  handleChange = (newText) => {
    this.setState({
      mobileNumber: newText,
    });
  };
  handleSend = () => {
    this.setState({
      status: true,
    });

    // this.setState({
    //   otp: `otp sent to ${this.state.mobileNumber}`,
    // });
    // axios
    //   .post(
    //     "http://stskfacilities.com:8081/stskFmsApi/otpServices/sendOtpBySMS",
    //     this.state,
    //     {
    //       headers: header,
    //     }
    //   )
    //   .then((Response) => {
    //     console.log(Response);
    //     console.log(Response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  handleVerify = () => {
    this.props.navigation.navigate("change password");
  };
  render() {
    const { status } = this.state;
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={globalStyles.container}>
          <ImageBackground style={globalStyles.image} source={back}>
            {status ? (
              <View style={globalStyles.center}>
                <TextInput
                  style={globalStyles.textInput}
                  onChangeText={this.handleChange}
                  keyboardType="numeric"
                  placeholder="Enter otp here"
                ></TextInput>
                <View style={globalStyles.button}>
                  <Text
                    style={globalStyles.buttonText}
                    onPress={this.handleVerify}
                  >
                    Verify
                  </Text>
                </View>
              </View>
            ) : (
              <View style={globalStyles.center}>
                <TextInput
                  style={globalStyles.textInput}
                  onChangeText={this.handleChange}
                  keyboardType="numeric"
                  placeholder="Enter mobile number"
                />
                <Text>{this.state.otp}</Text>
                <View style={globalStyles.button}>
                  <Text
                    style={globalStyles.buttonText}
                    onPress={this.handleSend}
                  >
                    Send otp
                  </Text>
                </View>
              </View>
            )}
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
export default ForgotPwd;
