import React, { Component } from "react";

import { Text, View, Image, TouchableOpacity } from "react-native";
import { s, cs, colors } from "./../../styles";
import { headerData } from "./../data";
import { createDrawerNavigator } from "react-navigation";

class Header extends Component {
  render() {
    return (
      <View style={[cs.header1.container]}>
        <TouchableOpacity
          style={[cs.header1.menu]}
          onPress={() => this.props.openDrawer()}
        >
          <Image source={headerData.menuBlack} style={cs.header1.menuIcon} />
        </TouchableOpacity>
        <View style={[cs.header1.body]} />
      </View>
    );
  }
}

export default Header;
