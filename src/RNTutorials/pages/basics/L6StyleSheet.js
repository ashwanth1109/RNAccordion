import React, { Component } from "react";

import { Text, View } from "react-native";
import { s, cs, colors } from "./../../styles";

class L6StyleSheet extends Component {
  render() {
    return (
      <View style={[cs.container.flexCenter]}>
        <Text style={[cs.bigBlackFont]}>L6StyleSheet</Text>
      </View>
    );
  }
}

export default L6StyleSheet;
