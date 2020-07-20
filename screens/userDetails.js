import React, { Component } from "react";
import axios from "axios";
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
  Alert,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";
import userDetailspng from "../assets/userDetails.png";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import { connect } from "react-redux";

import * as Permissions from "expo-permissions";

const headers = {
  "x-api-key": " $2a$10$AIUufK8g6EFhBcumRRV2L.AQNz3Bjp7oDQVFiO5JJMBFZQ6x2/R/2",
};

class UserDetails extends Component {
  state = {
    error: "",
    radio1: false,
    radio2: false,
    image: null,
    jobTypes: [],
    selectedUserType: 1,
    name: "",
    email: "",
    mob: this.props.details.mobileNumber,
    mobileNumber: this.props.details.mobileNumber,
    panNum: "",
    aadharNum: "",
    eduQual: "",
    experience: false,
    working: false,
    jobUpdate: "SMS",
    address: "Bengalore",
    fresher: true,
    prevcompanyName: "fresher",
    prevdesignation: "fresher",
    prevjobLocation: "fresher",
    companyName: "",
    designation: "",
    noticePeriod: "",
    noOfDays: "",
    currentLocation: "",
    negotiable: "",
    upTo: "",
    jobLocation: "",
    userLoginId: "",
    Updates: ["Send Mail", "SMS", "Both", "None"],
  };

  loadUserTypes() {
    return (
      this.state.jobTypes &&
      this.state.jobTypes.map((job) => (
        <Picker.Item key={job.id} label={job.name} value={job.id} />
      ))
    );
  }

  componentDidMount() {
    this.getPermissionAsync();

    axios
      .get("/userLogin/getByMob/" + this.props.details.mobileNumber, {
        headers,
      })
      .then((res) => {
        console.log(res.data);
        this.setState({
          userLoginID: res.data.data.id,
          email: res.data.data.email,
        });
      });

    axios.get("/jobTypes/getAllJobTypes", { headers }).then((res) => {
      console.log(res.data);
      console.log(res.data.data);
      this.setState({
        jobTypes: res.data.data,
      });
    });
  }
  handleImage = () => {};
  handleSubmit = () => {
    console.log(this.state);
    const {
      name,
      email,
      mob,
      panNum,
      aadharNum,
      eduQual,
      experience,
      working,
      jobUpdate,
      address,
      fresher,
      companyName,
      noOfDays,
      noticePeriod,
      designation,
      jobLocation,
      currentLocation,
      upTo,
      negotiable,
      selectedUserType,
    } = this.state;
    console.log(
      name,
      email,
      mob,
      panNum,
      aadharNum,
      eduQual,
      working,
      jobUpdate,
      address,
      fresher,
      currentLocation,
      this.state.userLoginID,
      selectedUserType
    );
    axios
      .post(
        "/stskFmsApi/jobseeker/createJS",
        {
          name,
          email,
          mob,
          panNum,
          aadharNum,
          eduQual,
          working,
          jobUpdate,
          address,
          fresher,
          currentLocation,
          userLogin: {
            id: this.state.userLoginID,
          },
          jobTypes: {
            id: selectedUserType,
          },
        },
        {
          headers,
        }
      )

      .then((response) => {
        console.log(response.data);
        if (response.data.success === 1) {
          console.log(response);
          console.log(response.data);

          this.props.navigation.navigate("upload document");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  render() {
    const { radio1, radio2, image, mobileNumber, email } = this.state;
    console.log(this.state);
    return (
      <ScrollView>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={globalStyles.container}>
            <TouchableOpacity onPress={this._pickImage}>
              <Image
                source={image ? { uri: image } : userDetailspng}
                style={{
                  width: 100,
                  height: 100,
                  marginTop: 30,
                  borderRadius: 100,
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: "teal",
                fontWeight: "bold",
                fontSize: 30,
                marginBottom: 30,
              }}
            >
              Job seeker
            </Text>

            <TextInput
              style={globalStyles.textInput}
              placeholder="Enter full name"
              onChangeText={(val) => this.setState({ name: val })}
            />
            <TextInput
              style={globalStyles.textInput}
              placeholder="Enter email "
              value={email}
            />
            <TextInput
              style={globalStyles.textInput}
              placeholder="Phone number"
              keyboardType="numeric"
              value={mobileNumber}
            />
            <TextInput
              style={globalStyles.textInput}
              placeholder="PAN number"
              onChangeText={(val) => this.setState({ panNum: val })}
            />
            <TextInput
              style={globalStyles.textInput}
              placeholder="Adhar card number"
              onChangeText={(val) => this.setState({ aadharNum: val })}
            />
            <TextInput
              style={globalStyles.textInput}
              placeholder="Education qualification"
              onChangeText={(val) => this.setState({ eduQual: val })}
            />
            <TextInput
              style={globalStyles.textInput}
              placeholder="current location"
              onChangeText={(val) => this.setState({ currentLocation: val })}
            />

            <Picker
              selectedValue={this.state.selectedUserType}
              style={{
                width: "84%",
                borderRadius: 10,
                borderColor: "teal",
                borderWidth: 1,
              }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({
                  selectedUserType: itemValue,
                })
              }
            >
              {this.loadUserTypes()}
            </Picker>
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
                SUBMIT
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    details: state.userLogin.userLogin,
  };
};
export default connect(mapStateToProps)(UserDetails);
