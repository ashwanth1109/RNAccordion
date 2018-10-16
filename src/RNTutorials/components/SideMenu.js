import React, { Component } from "react";

import { Text, View } from "react-native";
import { s, cs, colors } from "./../../styles";
import { NavigationActions } from "react-navigation";

class SideMenu extends Component {
  render() {
    return (
      <View style={[cs.container.flexCenter]}>
        <Text style={[cs.bigBlackFont]}>SideMenu</Text>
      </View>
    );
  }
}

export default SideMenu;
