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
import { TouchableOpacity } from "react-native-gesture-handler";
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
                <Text style={styles.userInfo}>Security Guard </Text>
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
            <View style={styles.card}>
              <View style={{ flexDirection: "column" }}>
                <Text style={styles.name1}>Recommended jobs</Text>
                <Text style={styles.userInfo1}>Security guard</Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 35,
                    fontWeight: "bold",
                    left: "40%",
                  }}
                >
                  35
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#DCDCDC",
                    borderRadius: 10,
                    height: "100%",
                    width: 100,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "teal",
                      fontWeight: "bold",
                      fontSize: 19,
                    }}
                  >
                    View all
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                top: 30,
                justifyContent: "space-between",
                margin: 10,
              }}
            >
              <View style={styles.appliedNewSaved}>
                <TouchableOpacity style={globalStyles.centerItem}>
                  <Text style={styles.appliedNewSavedNumber}>12</Text>
                  <Text style={styles.appliedNewSavedText}>Applied</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.appliedNewSaved}>
                <TouchableOpacity style={globalStyles.centerItem}>
                  <Text style={styles.appliedNewSavedNumber}>10</Text>
                  <Text style={styles.appliedNewSavedText}>Saved</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.appliedNewSaved}>
                <TouchableOpacity style={globalStyles.centerItem}>
                  <Text style={styles.appliedNewSavedNumber}>13</Text>
                  <Text style={styles.appliedNewSavedText}>New jobs</Text>
                </TouchableOpacity>
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
  name1: {
    fontSize: 18,
    color: "grey",
    paddingBottom: 10,
    fontWeight: "bold",
  },
  userInfo1: {
    fontSize: 16,
    color: "grey",
    fontWeight: "bold",
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
  card: {
    borderRadius: 6,
    elevation: 3,
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 18,
    height: 70,
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 14,
    borderWidth: 6,
    borderColor: "white",

    justifyContent: "space-around",
  },
  CardContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  appliedNewSaved: {
    width: 125,
    height: 100,
    backgroundColor: "#DCDCDC",
    borderWidth: 6,
    borderColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  appliedNewSavedNumber: {
    fontSize: 40,
    fontWeight: "bold",
  },
  appliedNewSavedText: {
    fontWeight: "bold",
  },
});

export default Home;

// <View>
// <View style={[styles.card, { width: 60 }]}>
//   <Text>12</Text>
//   <Text>Applied</Text>
// </View>
// <View style={[styles.card, { width: 60 }]}>
//   <Text>10</Text>
//   <Text>New</Text>
// </View>
// <View style={[styles.card, { width: 60 }]}>
//   <Text>18</Text>
//   <Text>Saved</Text>
// </View>
// </View>
