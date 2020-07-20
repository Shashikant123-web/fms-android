import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { globalStyles } from "../styles/global";
import backReverse from "../assets/backRev.png";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

class ChangePwd extends Component {
  state = {
    mob: this.props.route.params,
    password: "",
    confrmPwd: "",
    error: "",
    eye1: false,
    eye2: false,
    loading: false,
  };
  handleSave = () => {
    const { password, confrmPwd, mob } = this.state;
    if (password.length !== 0 && confrmPwd.length !== 0) {
      if (password !== confrmPwd) {
        this.setState({
          password: "",
          confrmPwd: "",
          error: "Password and conformPassword mis-match",
        });
      } else {
        this.setState({ error: "" });
        axios
          .put(
            "/stskFmsApi/userLogin/resetpassword",
            {
              countryCode: 91,
              mob,
              password,
            },
            { headers }
          )
          .then((Response) => {
            if (Response.data.success === 1) {
              this.props.navigation.navigate("user login");
            } else
              this.setState({
                error: "Please Try again...",
              });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else {
      this.setState({
        error: "data required",
      });
    }
  };
  render() {
    const { eye1, eye2, loading } = this.state;
    console.log(this.props.route.params);
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
              Change password
            </Text>
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
            <View style={[globalStyles.textInput, { flexDirection: "row" }]}>
              <TextInput
                style={globalStyles.textInput}
                placeholder="confirm password"
                secureTextEntry={eye2 ? false : true}
                onChangeText={(val) => this.setState({ confrmPwd: val })}
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
              <Text style={globalStyles.buttonText} onPress={this.handleSave}>
                save
              </Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    );
  }
}

export default ChangePwd;
