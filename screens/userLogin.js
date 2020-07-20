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
import axios from "axios";
import { globalStyles } from "../styles/global";
import backReverse from "../assets/backRev.png";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { userLoginAction } from "../Redux/Actions/UserLoginAction";
const header = {
  "x-api-key": " $2a$10$AIUufK8g6EFhBcumRRV2L.AQNz3Bjp7oDQVFiO5JJMBFZQ6x2/R/2",
};
class UserLogin extends Component {
  state = {
    email: "",
    email1: "",
    password: "",
    error: "",
    emailStatus: false,
    eye1: false,
    loading: false,
  };
  validate = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      this.setState({
        email1: text,
        email: "'" + text + "'",
        error: "Email is Not Correct",
      });
      return false;
    } else {
      this.setState({
        email1: text,
        email: "'" + text + "'",
        error: "",
        emailStatus: true,
      });
    }
  };
  handleLogin = () => {
    const { password, emailStatus, email1, email } = this.state;
    console.log(this.state);
    this.setState({
      loading: true,
      error: "",
    });
    // this.props.navigation.navigate("home");
    axios
      .get("/jobseeker/getByEmailid/" + email, {
        headers: header,
      })
      .then((res) => {
        console.log(res.data);
        console.log(res.data.data);
        this.setState({
          details: res.data.data,
        });
        if (res.data.data === null) {
          axios
            .get("/userLogin/getByEmailid/" + email, {
              headers: header,
            })
            .then((res) => {
              if (res.data.success === 1) {
                this.setState({
                  mobileNumber: res.data.data.mob,
                });
                this.props.userLoginAction(res.data.data.mob);
              } else {
                this.setState({
                  error: "Opps! email id does not registered",
                  loading: false,
                });
              }
            });
        } else {
          console.log(res.data.data);
          this.setState({
            userId: res.data.data.id,
            mobileNumber: res.data.data.mob,
          });
        }
      });

    axios
      .post(
        "/userLogin/verifyUser",
        {
          email: email1,
          password: password,
        },
        { headers: header }
      )
      .then((Response) => {
        console.log(Response.data);
        console.log(Response.data.success);
        if (Response.data.success === 1) {
          axios
            .get("/jobseeker/getByEmailid/" + email, {
              headers: header,
            })
            .then((res) => {
              console.log(res.data);
              console.log(res.data.data);
              if (res.data.data === null) {
                this.props.userLoginAction(this.state);
                this.props.navigation.navigate("details");
              } else {
                this.props.userLoginAction(this.state);
                this.props.navigation.navigate("home");
              }
            });
        } else if (Response.data.message === "User ID or Password error") {
          this.setState({
            error: "Password error",
            loading: false,
          });
        } else {
          this.setState({
            error: "Opps! email id does not registered",
            loading: false,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
              value={this.state.email1}
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
            {loading ? (
              <ActivityIndicator style={{ top: 10 }} size={25} color="teal" />
            ) : null}

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
const mapDispatchToProps = (dispatch) => {
  return {
    userLoginAction: (UserLogin) => dispatch(userLoginAction(UserLogin)),
  };
};

export default connect(null, mapDispatchToProps)(UserLogin);
