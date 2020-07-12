import "react-native-gesture-handler";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
import SendOtp from "./screens/sendOtp";
import Verify from "./screens/verify";
import Preregisteration from "./screens/preregistration";
import Register from "./screens/register";
import UserDetails from "./screens/userDetails";

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="details" component={UserDetails} />
          <Stack.Screen name="welcome" component={Preregisteration} />
          <Stack.Screen name="user registration" component={Register} />
          <Stack.Screen name="SendOtp" component={SendOtp} />
          <Stack.Screen name="verify" component={Verify} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;
