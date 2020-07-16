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
    const { password, confrmPwd, email } = this.state;
    console.log(this.state);
    // this.props.navigation.navigate("details");
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
            "/stskFmsApi/userLogin/createUL",
            {
              mob: this.state.mob,
              email: this.state.email,
              password: this.state.password,
              userRoles: {
                id: this.state.userRoles.id,
              },
            },
            { headers: header }
          )
          .then((response) => {
            this.props.navigation.navigate("details");
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
