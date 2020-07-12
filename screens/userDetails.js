import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Picker,
  Image,
  TouchableOpacity,
  CheckBox,
} from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";
import userDetailspng from "../assets/userDetails.png";
import ImagePicker from "react-native-image-picker";

class UserDetails extends Component {
  state = {
    photo: null,
    email: "",
    password: "",
    confrmPwd: "",
    error: "",
    radio1: false,
    radio2: false,
  };
  handleImage = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.uri) {
        this.setState({
          photo: response,
        });
      }
    });
  };
  handleSubmit = () => {
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
  };
  render() {
    const { radio1, radio2, photo } = this.state;
    return (
      <ScrollView>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={globalStyles.container}>
            {photo && (
              <Image
                source={{ uri: photo.uri }}
                style={{ width: 300, height: 300 }}
              ></Image>
            )}
            <Image
              source={userDetailspng}
              style={{ width: 100, height: 100, marginTop: 30 }}
            />
            <TouchableOpacity onPress={this.handleImage}>
              <Image
                source={userDetailspng}
                style={{ width: 100, height: 100, marginTop: 30 }}
              />
            </TouchableOpacity>
            <TextInput
              style={{
                color: "teal",
                fontWeight: "bold",
                fontSize: 30,
                marginBottom: 30,
              }}
            >
              Job seeker
            </TextInput>
            <TextInput
              style={globalStyles.textInput}
              placeholder="Enter full name"
              onChangeText={(val) => this.setState({ email: val })}
            />
            <TextInput
              style={globalStyles.textInput}
              placeholder="Enter email "
              onChangeText={(val) => this.setState({ password: val })}
            />
            <TextInput
              style={globalStyles.textInput}
              placeholder="Phone number"
              onChangeText={(val) => this.setState({ confrmPwd: val })}
            />
            <TextInput
              style={globalStyles.textInput}
              placeholder="PAN number"
              onChangeText={(val) => this.setState({ email: val })}
            />
            <TextInput
              style={globalStyles.textInput}
              placeholder="Adhar card number"
              onChangeText={(val) => this.setState({ password: val })}
            />
            <TextInput
              style={globalStyles.textInput}
              placeholder="confirm password"
              onChangeText={(val) => this.setState({ confrmPwd: val })}
            />
            <TextInput
              style={globalStyles.textInput}
              placeholder="Education qualification"
              onChangeText={(val) => this.setState({ email: val })}
            />
            <TextInput
              style={globalStyles.textInput}
              placeholder="Drop down"
              onChangeText={(val) => this.setState({ password: val })}
            />
            <Text style={{ width: "80%", marginBottom: 20 }}>
              Are you Fresher
            </Text>

            <View style={{ flexDirection: "row", width: "80%" }}>
              <CheckBox
                value={radio1}
                onChange={() => this.setState({ radio1: true, radio2: false })}
              />
              <Text style={{ marginTop: 5 }}>Yes</Text>

              <CheckBox
                value={radio2}
                onChange={() => this.setState({ radio2: true, radio1: false })}
              />
              <Text style={{ marginTop: 5 }}>No</Text>
            </View>
            <Text>{this.state.error}</Text>
            <View style={[globalStyles.button, { marginBottom: 50 }]}>
              <Text style={globalStyles.buttonText} onPress={this.handleSubmit}>
                Submit
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    );
  }
}

export default UserDetails;
