import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  ActivityIndicator,
  Alert,
} from "react-native";
import { globalStyles } from "../styles/global";
import backReverse from "../assets/backRev.png";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

class UserLogin extends Component {
  state = {
    email: "",
    password: "",
    confrmPwd: "",
    error: "",
    emailStatus: false,
    eye1: false,
    loading: false,
  };
  validate = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      this.setState({ email: text, error: "Email is Not Correct" });
      return false;
    } else {
      this.setState({ email: text, error: "", emailStatus: true });
    }
  };
  handleLogin = () => {
    const { password, confrmPwd, emailStatus, email } = this.state;

    this.setState({
      loading: true,
    });
    this.props.navigation.navigate("home");
    // if (
    //   emailStatus === true &&
    //   password.length !== 0 &&
    //   confrmPwd.length !== 0 &&
    //   email.length !== 0
    // ) {
    //   if (password !== confrmPwd) {
    //     this.setState({
    //       password: "",
    //       confrmPwd: "",
    //       error: "Password and conformPassword mis-match",
    //     });
    //   } else {
    //     this.setState({ error: "" });

    //   axios
    //     .post(
    //       "/stskFmsApi/userLogin/createUL",
    //       {
    //         mob: this.state.mob,
    //         email: this.state.email,
    //         password: this.state.password,
    //         userRoles: {
    //           id: this.state.userRoles.id,
    //         },
    //       },
    //       { headers: header }
    //     )
    //     .then((response) => {
    //       console.log(response);
    //       console.log(this.state);
    //       this.props.history.push({
    //         pathname: "/userDetails",
    //       });
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    //   }
    // } else {
    //   this.setState({
    //     error: "Email required",
    //   });
    //}
  };
  render() {
    const { eye1, loading } = this.state;
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
              User Login
            </Text>
            <TextInput
              style={globalStyles.textInput}
              placeholder="Email id / User Id"
              onChangeText={(text) => this.validate(text)}
              value={this.state.email}
            />
            <View style={[globalStyles.textInput, { flexDirection: "row" }]}>
              <TextInput
                style={globalStyles.textInput}
                placeholder="Password"
                secureTextEntry={eye1 ? false : true}
                onChangeText={(val) => this.setState({ password: val })}
              />
              <Ionicons
                style={{ marginLeft: "10%" }}
                name={eye1 ? "ios-eye" : "ios-eye-off"}
                size={20}
                color="teal"
                onPress={() => this.setState({ eye1: !eye1 })}
              />
            </View>

            <Text style={{ color: "red", marginBottom: 20 }}>
              {this.state.error}
            </Text>
            <View style={globalStyles.button}>
              <Text style={globalStyles.buttonText} onPress={this.handleLogin}>
                Login
              </Text>
            </View>

            <Text
              onPress={() => this.props.navigation.navigate("forgot password")}
              style={{ color: "teal", fontWeight: "bold", top: 30 }}
            >
              Forgot password?
            </Text>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    );
  }
}

export default UserLogin;
