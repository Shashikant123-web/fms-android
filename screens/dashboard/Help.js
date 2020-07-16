import React, { Component } from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../../styles/global";
class Help extends Component {
  state = {};
  render() {
    return (
      <View style={globalStyles.container}>
        <Text>Help page</Text>
      </View>
    );
  }
}

export default Help;
