import React, { Component } from "react";
import axios from "axios";
import { globalStyles } from "../styles/global";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { userLoginAction } from "../Redux/Actions/UserLoginAction";

import * as DocumentPicker from "expo-document-picker";
import { Text, View, ImageBackground } from "react-native";
import back from "../assets/back.png";
import { connect } from "react-redux";
import { Feather } from "@expo/vector-icons";

const headers = {
  "x-api-key": " $2a$10$AIUufK8g6EFhBcumRRV2L.AQNz3Bjp7oDQVFiO5JJMBFZQ6x2/R/2",
};
class UploadDocument extends Component {
  state = {
    docu: "",
    docuName: "",
    mobileNumber: this.props.details.mobileNumber,
    userId: "",
    details: {},
  };
  componentDidMount() {
    axios
      .get(
        "/stskFmsApi/jobseeker/getByMob/" + this.props.details.mobileNumber,
        headers
      )

      .then((res) => {
        console.log(res.data.data.id);
        console.log(res.data.data);
        this.setState({
          details: res.data.data,
          userId: res.data.data.id,
        });
      });
  }
  _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});

    this.setState({
      docu: result.uri,
      docuName: result.name,
    });
    console.log(result);
  };
  handleUpload = () => {
    this.props.userLoginAction(this.state);
    const tm = setTimeout(() => {
      this.props.navigation.navigate("home");
    }, 50);
  };

  render() {
    console.log(this.props.details.mobileNumber);
    console.log(this.props);
    return (
      <View style={globalStyles.container}>
        <ImageBackground style={globalStyles.image} source={back}>
          <View style={[globalStyles.center, { top: 10 }]}>
            <View
              style={[
                globalStyles.button,
                {
                  backgroundColor: "white",
                  borderWidth: 1,
                  borderColor: "teal",
                  bottom: 20,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                },
              ]}
            >
              <Feather
                name="upload-cloud"
                style={{ right: 15 }}
                size={24}
                color="teal"
              />
              <Text
                style={[
                  globalStyles.buttonText,
                  {
                    color: "teal",
                    borderRadius: 10,
                  },
                ]}
                onPress={this._pickDocument}
              >
                upload document
              </Text>
            </View>
            <Text style={{ color: "teal" }}>{this.state.docuName}</Text>

            <View style={[globalStyles.button, { top: 30 }]}>
              <Text style={globalStyles.buttonText} onPress={this.handleUpload}>
                UPLOAD
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
    details: state.userLogin.userLogin,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    userLoginAction: (UserLogin) => dispatch(userLoginAction(UserLogin)),
    token: () => dispatch({ type: TOKEN }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UploadDocument);
