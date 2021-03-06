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
import axios from "axios";
import uploadDocument from "../screens/uploadDocument";
import { Title } from "react-native-paper";

axios.defaults.baseURL = "http://stskfacilities.com:8081/stskFmsApi";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
class Index extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ title: "" }}
            name="SendOtp"
            component={SendOtp}
          />
          <Stack.Screen name="verify" component={Verify} />
          <Stack.Screen
            options={{
              title: "choose your catagory",
              headerTitleAlign: "center",
            }}
            name="preRegister"
            component={Preregisteration}
          />
          <Stack.Screen name="user registration" component={Register} />
          <Stack.Screen name="details" component={UserDetails} />
          <Stack.Screen name="upload document" component={uploadDocument} />
          <Stack.Screen name="change password" component={ChangePwd} />
          <Stack.Screen name="user login" component={UserLogin} />
          <Stack.Screen name="forgot password" component={ForgotPwd} />
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
