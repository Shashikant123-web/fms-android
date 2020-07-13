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
import { color } from "react-native-reanimated";

const header = {
  "x-api-key": " $2a$10$AIUufK8g6EFhBcumRRV2L.AQNz3Bjp7oDQVFiO5JJMBFZQ6x2/R/2",
};
class SendOtp extends Component {
  state = {
    mobileNumber: "",
    countryCode: "91",
    otp: "",
  };
  handleChange = (newText) => {
    this.setState({
      mobileNumber: newText,
    });
  };
  handleSend = () => {
    //navigation.navigate("ReviewDetails");
    this.props.navigation.navigate("verify");

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
  render() {
    console.log(this.props);
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={globalStyles.container}>
          <ImageBackground style={globalStyles.image} source={back}>
            <View style={globalStyles.center}>
              <TextInput
                style={globalStyles.textInput}
                onChangeText={this.handleChange}
                keyboardType="numeric"
                placeholder="Enter mobile number"
              />
              <Text>{this.state.otp}</Text>
              <View style={globalStyles.button}>
                <Text style={globalStyles.buttonText} onPress={this.handleSend}>
                  Send otp
                </Text>
              </View>
            </View>
            <View
              style={{
                height: 100,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  top: -100,
                  fontWeight: "bold",
                }}
              >
                Sign in options
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  top: -50,
                  justifyContent: "space-around",
                }}
              >
                <TouchableOpacity onPress={() => {}}>
                  <Image source={facebook} style={{ width: 40, height: 40 }} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {}}>
                  <Image source={google} style={{ width: 40, height: 40 }} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {}}>
                  <FontAwesome5 name="user-alt" size={40} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
export default SendOtp;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   container1: {
//     width: "100%",
//     height: "100%",
//   },
//   container2: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   sendOtp: {
//     elevation: 8,
//     backgroundColor: "#009688",
//     borderRadius: 10,
//     paddingVertical: 10,
//     paddingHorizontal: 12,
//   },
// });
