import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  Alert,
} from "react-native";
import { globalStyles } from "../styles/global";
import backReverse from "../assets/backRev.png";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import axios from "axios";

const header = {
  "x-api-key": " $2a$10$AIUufK8g6EFhBcumRRV2L.AQNz3Bjp7oDQVFiO5JJMBFZQ6x2/R/2",
};

class Register extends Component {
  state = {
    email: "",
    password: "",
    confrmPwd: "",
    error: "",
    mob: this.props.sendOtp.mobileNumber,
    mobileNumber: this.props.sendOtp.mobileNumber,
    id: this.props.route.params.id,
    eye1: false,
    eye2: false,
  };
  validate = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      this.setState({ email: text, error: "Email is Not Correct" });
      return false;
    } else {
      this.setState({ email: text, error: "" });
    }
  };
  handleNext = () => {
    const { password, confrmPwd, email, mob, id } = this.state;
    console.log(this.state);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === false) {
      this.setState({ error: "Email is Not Correct" });
    } else {
      this.setState({ error: "" });
      if (password !== confrmPwd) {
        this.setState({
          password: "",
          confrmPwd: "",
          error: "Password and conformPassword mis-match",
        });
      } else {
        this.setState({ error: "" });
        axios
          .post(
            "/userLogin/createUL",
            {
              mob,
              email,
              password,
              userRoles: {
                id,
              },
            },
            { headers: header }
          )
          .then((res) => {
            console.log(res);
            console.log(res.data.success);
            if (res.data.success === 1) {
              this.props.navigation.navigate("details");
            } else {
              this.setState({
                error: "Email or mob number already exists, try again..!",
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  };
  render() {
    const { eye1, eye2 } = this.state;
    console.log(this.props);
    console.log(this.state);
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <ImageBackground style={globalStyles.image} source={backReverse}>
          <View style={globalStyles.container}>
            <Text
              style={{
                color: "teal",
                fontWeight: "bold",
                fontSize: 30,
                marginBottom: 30,
              }}
            >
              {this.props.route.params.name}
            </Text>
            <TextInput
              style={globalStyles.textInput}
              placeholder="Email id / User Id"
              onChangeText={(text) => this.setState({ email: text })}
              value={this.state.email}
            />
            <View style={[globalStyles.textInput, { flexDirection: "row" }]}>
              <TextInput
                style={globalStyles.textInput}
                placeholder="Password"
                secureTextEntry={eye1 ? false : true}
                onChangeText={(val) => this.setState({ password: val })}
                value={this.state.password}
              />
              <Ionicons
                style={{ marginLeft: "10%" }}
                name={eye1 ? "ios-eye" : "ios-eye-off"}
                size={20}
                color="teal"
                onPress={() => this.setState({ eye1: !eye1 })}
              />
            </View>
            <View style={[globalStyles.textInput, { flexDirection: "row" }]}>
              <TextInput
                style={globalStyles.textInput}
                placeholder="confirm password"
                secureTextEntry={eye2 ? false : true}
                onChangeText={(val) => this.setState({ confrmPwd: val })}
                value={this.state.confrmPwd}
              />
              <Ionicons
                style={{ marginLeft: "10%" }}
                name={eye2 ? "ios-eye" : "ios-eye-off"}
                size={20}
                color="teal"
                onPress={() => this.setState({ eye2: !eye2 })}
              />
            </View>

            <Text style={{ color: "red", marginBottom: 20 }}>
              {this.state.error}
            </Text>
            <View style={globalStyles.button}>
              <Text style={globalStyles.buttonText} onPress={this.handleNext}>
                Next
              </Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    sendOtp: state.SendOtp.SendOtp.mobileNumber,
  };
};

export default connect(mapStateToProps)(Register);

// <Stack.Navigator
//   screenOptions={{
//     headerShown: false
//   }}
// >
//   <Stack.Screen name="route-name" component={ScreenComponent} />
// </Stack.Navigator>

// <Stack.Screen options={{headerShown: false}} name="route-name" component={ScreenComponent} />
