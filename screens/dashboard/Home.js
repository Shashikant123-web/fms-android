import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import {
  MaterialIcons,
  Feather,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import backReverse from "../../assets/backReverse.png";

import { globalStyles } from "../../styles/global";
class Home extends Component {
  state = {};
  render() {
    return (
      <View style={globalStyles.container}>
        <ImageBackground style={globalStyles.image} source={backReverse}>
          <View>
            <View
              style={[
                styles.headerContent,
                {
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: 30,
                },
              ]}
            >
              <View>
                <Image
                  style={styles.avatar}
                  source={{
                    uri: "https://bootdey.com/img/Content/avatar/avatar6.png",
                  }}
                />
              </View>

              <View style={{ marginLeft: 10 }}>
                <Text style={styles.name}>Shashikant Subhas </Text>
                <Text style={styles.userInfo}>shashi@mail.com </Text>
              </View>
            </View>
            <View>
              <View style={styles.logo}>
                <MaterialIcons name="email" size={27} color="white" />
                <Text style={styles.LogoText}>Email</Text>
              </View>
              <View style={styles.logo}>
                <Feather name="phone-call" size={24} color="white" />
                <Text style={styles.LogoText}>Email</Text>
              </View>
              <View style={styles.logo}>
                <MaterialCommunityIcons
                  name="bag-checked"
                  size={30}
                  color="white"
                />
                <Text style={styles.LogoText}>Email</Text>
              </View>
              <View style={styles.logo}>
                <FontAwesome5 name="book-open" size={20} color="white" />
                <Text style={styles.LogoText}>Email</Text>
              </View>
              <View style={styles.logo}>
                <MaterialIcons name="location-on" size={30} color="white" />
                <Text style={styles.LogoText}>Email</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  headerContent: {
    alignItems: "center",
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 5,
  },
  name: {
    fontSize: 22,
    color: "white",
    paddingBottom: 10,
    fontWeight: "600",
  },
  userInfo: {
    fontSize: 16,
    color: "white",
    fontWeight: "600",
  },
  body: {
    backgroundColor: "#778899",
    height: 500,
    alignItems: "center",
  },
  logo: {
    flexDirection: "row",
    marginLeft: "20%",
    paddingTop: 7,
  },
  LogoText: {
    fontWeight: "bold",
    color: "white",
    top: 3,
    marginLeft: "5%",
    fontSize: 16,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495e",
  },
});

export default Home;
