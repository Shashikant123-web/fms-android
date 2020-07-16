import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SendOtp from "../screens/sendOtp";
import Verify from "../screens/verify";
import Preregisteration from "../screens/preregistration";
import Register from "../screens/register";
import UserDetails from "../screens/userDetails";
import UserLogin from "../screens/userLogin";
import ForgotPwd from "../screens/forgotPwd";
import ChangePwd from "../screens/changePwd";
import Home from "../screens/dashboard/DrawerNavigation";
import Help from "../screens/dashboard/Help";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
class Index extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SendOtp" component={SendOtp} />
          <Stack.Screen name="verify" component={Verify} />
          <Stack.Screen name="welcome" component={Preregisteration} />
          <Stack.Screen name="user registration" component={Register} />
          <Stack.Screen name="details" component={UserDetails} />
          <Stack.Screen name="user login" component={UserLogin} />
          <Stack.Screen name="forgot password" component={ForgotPwd} />
          <Stack.Screen name="change password" component={ChangePwd} />
          <Stack.Screen
            options={{ headerShown: false }}
            name="home"
            component={Home}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default Index;
