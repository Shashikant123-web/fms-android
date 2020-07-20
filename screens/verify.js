import React, { Component } from "react";
import { Text, View, TextInput, ImageBackground, Button } from "react-native";
// import Button from "react-native-button";
import back from "../assets/back.png";
import { globalStyles } from "../styles/global";
import { connect } from "react-redux";
import { userLoginAction } from "../Redux/Actions/UserLoginAction";
import axios from "axios";
const header = {
  "x-api-key": " $2a$10$AIUufK8g6EFhBcumRRV2L.AQNz3Bjp7oDQVFiO5JJMBFZQ6x2/R/2",
};
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
    this.setState({
      error: "",
      loading: true,
    });

    axios
      .get("/userLogin/getByMob/" + this.state.mobileNumber, {
        headers: header,
      })
      .then((Response) => {
        console.log(Response.data);
        console.log(Response.data);

        if (Response.data.success === 1) {
          axios
            .get("/jobseeker/getByMob/" + this.state.mobileNumber, {
              headers: header,
            })
            .then((res) => {
              console.log(res.data);

              if (res.data.success === 1) {
                this.setState({
                  userId: res.data.data.id,
                  details: res.data.data,
                });
                const time = setTimeout(() => {
                  this.props.userLoginAction(this.state);
                  this.props.navigation.navigate("home");
                }, 50);
              } else {
                this.props.userLoginAction(this.state);
                this.props.navigation.navigate("details");
              }
            });
        } else {
          this.props.userLoginAction(this.state);
          this.props.navigation.navigate("preRegister");
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(this.props.number);
      });

    // axios
    //   .post(
    //     "/otpServices/verifyOtpBySMS",
    //     {
    //       countryCode: 91,
    //       mobileNumber: this.state.mobileNumber,
    //       otp_input: this.state.otp,
    //     },
    //     { headers: header }
    //   )
    //   .then((Response) => {
    //     console.log(Response);
    //     console.log(Response.data);

    //     if (Response.data.type === "success") {
    //   axios
    //   .get("/userLogin/getByMob/" + this.state.mobileNumber, {
    //     headers: header,
    //   })
    //   .then((Response) => {
    //     console.log(Response.data);
    //     console.log(Response.data);

    //     if (Response.data.success === 1) {
    //       axios
    //         .get("/jobseeker/getByMob/" + this.state.mobileNumber, {
    //           headers: header,
    //         })
    //         .then((res) => {
    //           console.log(res.data);

    //           if (res.data.success === 1) {
    //             this.setState({
    //               userId: res.data.data.id,
    //               details: res.data.data,
    //             });
    //             const time = setTimeout(() => {
    //               this.props.userLoginAction(this.state);
    //               this.props.navigation.navigate("home");
    //             }, 50);
    //           } else {
    //             this.props.userLoginAction(this.state);
    //             this.props.navigation.navigate("details");
    //           }
    //         });
    //     } else {
    //       this.props.userLoginAction(this.state);
    //       this.props.navigation.navigate("preRegister");
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     console.log(this.props.number);
    //   });
    //     } else {
    //       this.setState({
    //         loading: false,
    //         otp: "",
    //         error: "Otp-mismatch",
    //       });
    //     }
    //   });
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
