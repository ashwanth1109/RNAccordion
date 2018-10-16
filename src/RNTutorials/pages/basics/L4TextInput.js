import React, { Component } from "react";

import { Text, View } from "react-native";
import { s, cs, colors } from "./../../styles";

class L4TextInput extends Component {
  render() {
    return (
      <View style={[cs.container.flexCenter]}>
        <Text style={[cs.bigBlackFont]}>L4TextInput</Text>
      </View>
    );
  }
}

export default L4TextInput;
