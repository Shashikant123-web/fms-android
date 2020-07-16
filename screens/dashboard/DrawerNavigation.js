import React, { Component } from "react";
import axios from "axios";
import { globalStyles } from "../../styles/global";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import back from "../../assets/back.png";
import Icon from "react-native-vector-icons/Ionicons";
import Help from "./Help";
import Home from "./Home";
import { Entypo, AntDesign } from "@expo/vector-icons";
const HomeStack = createStackNavigator();
const HelpStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      options={{
        title: "",
        headerLeft: () => (
          <Entypo
            style={{ paddingLeft: 15 }}
            name="menu"
            size={35}
            onPress={() => navigation.openDrawer()}
            color="white"
          />
        ),
      }}
      name="Home"
      component={Home}
    />
  </HomeStack.Navigator>
);

const header = {
  "x-api-key": " $2a$10$AIUufK8g6EFhBcumRRV2L.AQNz3Bjp7oDQVFiO5JJMBFZQ6x2/R/2",
};

class DrawerNavigation extends Component {
  state = {};

  render() {
    console.log(this.props);
    return (
      <NavigationContainer
        independent={true}
        options={{
          drawerIcon: (config) => (
            <Icon name="ios-menu" size={34} color="black" />
          ),
        }}
      >
        <Drawer.Navigator initialRouteName="Home" headerLeft="home">
          <Drawer.Screen
            options={{
              drawerIcon: (config) => (
                <Entypo name="home" size={24} color="black" />
              ),
            }}
            name="Home"
            component={HomeStackScreen}
          />
          <Drawer.Screen
            options={{
              drawerIcon: (config) => (
                <AntDesign name="edit" size={24} color="black" />
              ),
            }}
            name="Edit Profile"
            component={HomeStackScreen}
          />
          <Drawer.Screen
            options={{
              drawerIcon: (config) => (
                <Entypo name="help" size={24} color="black" />
              ),
            }}
            name="Help"
            component={Help}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
export default DrawerNavigation;
