import React, { Component } from "react";

import { Text, View } from "react-native";
import { s, cs, colors } from "./../../../styles";

class L1View extends Component {
  render() {
    return (
      <View style={[cs.container.flexCenter]}>
        <Text style={[cs.bigBlackFont]}>L1View</Text>
      </View>
    );
  }
}

export default L1View;
