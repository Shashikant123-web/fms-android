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
import { ActivityIndicator } from "react-native-paper";

const headers = {
  "x-api-key": " $2a$10$AIUufK8g6EFhBcumRRV2L.AQNz3Bjp7oDQVFiO5JJMBFZQ6x2/R/2",
};
class ForgotPwd extends Component {
  state = {
    countryCode: "91",
    mobileNumber: "",
    input_otp: "",
    errorOtp: "",
    otpLoading: false,
    status: false,
  };
  handleSend = () => {
    if (this.state.mobileNumber.length === 10) {
      axios
        .get("/userLogin/getByMob/" + this.state.mobileNumber, {
          headers,
        })
        .then((Response) => {
          console.log(Response.data);
          if (Response.data.success === 1) {
            this.setState({
              otpLoading: false,
              errorOtp: "",
              status: true,
            });
            // axios
            //   .post(
            //     "/otpServices/sendOtpBySMS",
            //     { countryCode: 91, mobileNumber: this.state.mobileNumber },
            //     { headers }
            //   )
            //   .then((Response) => {
            //     console.log(Response);
            //     console.log(Response.data);
            //   })
            //   .catch((error) => {
            //     console.log(error);
            //   });
          } else {
            this.setState({
              errorOtp: "Oops! mobile number not registered",
              otpLoading: false,
            });
          }
        });
    } else {
      this.setState({
        errorOtp: "Enter valid mobile number",
      });
    }
  };
  handleVerify = () => {
    this.props.navigation.navigate("change password", this.state.mobileNumber);
    // axios
    //   .post(
    //     "/stskFmsApi/otpServices/verifyOtpBySMS",
    //     {
    //       countryCode: 91,
    //       mobileNumber: this.state.mobileNumber,
    //    otp_input: this.state.input_otp,
    //     },
    //     { headers: header }
    //   )
    //   .then((Response) => {
    //     console.log(Response);
    //     console.log(Response.data);

    //     if (Response.data.type === "success") {
    //       this.props.navigation.navigate(
    //         "change password",
    //         this.state.mobileNumber
    //       );
    //     } else {
    //       this.setState({
    //         errorOtp: "Otp miss-match",
    //         otpLoading: false,
    //       });
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  render() {
    const { status, otpLoading, mobileNumber, input_otp } = this.state;
    console.log(this.state);
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
                  onChangeText={(text) => this.setState({ input_otp: text })}
                  keyboardType="numeric"
                  placeholder="Enter otp here"
                  value={input_otp}
                ></TextInput>

                <View style={globalStyles.button}>
                  {otpLoading ? (
                    <ActivityIndicator size={25} color={"teal"} />
                  ) : (
                    <Text
                      style={globalStyles.buttonText}
                      onPress={this.handleVerify}
                    >
                      Verify
                    </Text>
                  )}
                </View>
              </View>
            ) : (
              <View style={globalStyles.center}>
                <TextInput
                  style={globalStyles.textInput}
                  onChangeText={(text) => this.setState({ mobileNumber: text })}
                  keyboardType="numeric"
                  placeholder="Enter mobile number"
                  value={mobileNumber}
                />
                <Text style={{ color: "red", bottom: 20 }}>
                  {this.state.errorOtp}
                </Text>
                <View style={globalStyles.button}>
                  {otpLoading ? (
                    <ActivityIndicator size={25} color={"teal"} />
                  ) : (
                    <Text
                      style={globalStyles.buttonText}
                      onPress={this.handleSend}
                    >
                      Send otp
                    </Text>
                  )}
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
