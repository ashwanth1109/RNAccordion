import React, { Component } from "react";

import { Text, View } from "react-native";
import { s, cs, colors } from "./../../styles";

class L5ScrollView extends Component {
  render() {
    return (
      <View style={[cs.container.flexCenter]}>
        <Text style={[cs.bigBlackFont]}>L5ScrollView</Text>
      </View>
    );
  }
}

export default L5ScrollView;
