import React, { Component } from "react";

import { Text, View } from "react-native";
import { s, cs, colors } from "./../../styles";

class L3Image extends Component {
  render() {
    return (
      <View style={[cs.container.flexCenter]}>
        <Text style={[cs.bigBlackFont]}>L3Image</Text>
      </View>
    );
  }
}

export default L3Image;
