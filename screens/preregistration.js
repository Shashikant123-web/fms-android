import React, { Component } from "react";
import {
  Text,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
  View,
} from "react-native";
import backRev from "../assets/backRev.png";
import { globalStyles } from "../styles/global";
import jobseeker from "../assets/jobseeker2.png";
import association from "../assets/association2.png";
import resident from "../assets/resident2.png";
import vendor from "../assets/vendor2.png";
import axios from "axios";

const header = {
  "x-api-key": " $2a$10$AIUufK8g6EFhBcumRRV2L.AQNz3Bjp7oDQVFiO5JJMBFZQ6x2/R/2",
};

class Preregisteration extends Component {
  state = {
    userRoless: [],
    Jobseeker: {
      id: 1,
      name: "Job seeker",
    },
    Association: {
      id: 2,
      name: "Association",
    },
    Resident: {
      id: 3,
      name: "Resident",
    },
    Vendor: {
      id: 4,
      name: "Vendor",
    },
  };

  render() {
    const { userRoless } = this.state;
    const user =
      userRoless &&
      userRoless.map((item, index) => {
        return (
          <Text style={globalStyles.preregister} key={index}>
            {item.name}
          </Text>
        );
      });
    return (
      <ImageBackground style={globalStyles.container} source={backRev}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(
              "user registration",
              this.state.Jobseeker
            )
          }
          style={[
            globalStyles.preregister,
            { flexDirection: "row", padding: 15, height: 110, width: "80%" },
          ]}
        >
          <Image style={{ width: 90, height: 90 }} source={jobseeker} />
          <Text style={globalStyles.preregister}>Jobseeker</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(
              "user registration",
              this.state.Association
            )
          }
          style={[
            globalStyles.preregister,
            { flexDirection: "row", padding: 15, height: 110, width: "80%" },
          ]}
        >
          <Image style={{ width: 90, height: 90 }} source={association} />
          <Text style={globalStyles.preregister}>Association</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(
              "user registration",
              this.state.Resident
            )
          }
          style={[
            globalStyles.preregister,
            { flexDirection: "row", padding: 15, height: 110, width: "80%" },
          ]}
        >
          <Image style={{ width: 90, height: 90 }} source={resident} />
          <Text style={globalStyles.preregister}>Resident</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(
              "user registration",
              this.state.Vendor
            )
          }
          style={[
            globalStyles.preregister,
            { flexDirection: "row", padding: 15, height: 110, width: "80%" },
          ]}
        >
          <Image style={{ width: 90, height: 90 }} source={vendor} />
          <Text style={globalStyles.preregister}>Vendor</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

export default Preregisteration;
// <ImageBackground
// style={{ width: 50, height: 50 }}
// source={jobseeker}
// ></ImageBackground>

// <FlatList
//           data={this.state.userRoless}
//           renderItem={({ item }) => {
//             <TouchableOpacity>
//               <Text style={globalStyles.preregister}>{item.name}</Text>
//             </TouchableOpacity>;
//           }}
//         />
