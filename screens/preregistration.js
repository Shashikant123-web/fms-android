import React, { Component } from "react";
import {
  Text,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import backRev from "../assets/backRev.png";
import { globalStyles } from "../styles/global";
import jobseeker from "../assets/jobseeker2.png";
import axios from "axios";

const header = {
  "x-api-key": " $2a$10$AIUufK8g6EFhBcumRRV2L.AQNz3Bjp7oDQVFiO5JJMBFZQ6x2/R/2",
};

class Preregisteration extends Component {
  state = {
    userRoless: [],
    mobileNumber: "",
    userRoles: {
      id: "",
    },
  };
  componentDidMount() {
    axios
      .get(
        "http://stskfacilities.com:8081/stskFmsApi/userRoles/getAllUserRoles",
        { headers: header }
      )
      .then((res) => {
        console.log(res.data.data);
        this.setState({
          userRoless: res.data.data,
        });
      });
  }
  render() {
    const { userRoless } = this.state;
    const user = this.state.userRoless.map((item, index) => {
      return (
        <Text style={globalStyles.preregister} key={index}>
          {item.name}
        </Text>
      );
    });
    return (
      <ImageBackground style={globalStyles.container} source={backRev}>
        <FlatList
          style={{ marginTop: "10%", flexDirection: "row" }}
          data={userRoless}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                globalStyles.preregister,
                { flexDirection: "row", padding: 25 },
              ]}
              onPress={() =>
                this.props.navigation.navigate("user registration", item)
              }
            >
            
              <Text style={globalStyles.preregister}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
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
