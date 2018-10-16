import React, { Component } from "react";

import { Text, View } from "react-native";
import { s, cs, colors } from "./../../styles";

class Title extends Component {
  render() {
    return (
      <View style={[cs.title.container, this.props.style]}>
        <Text style={[cs.title.text]}>{this.props.titleText}</Text>
      </View>
    );
  }
}

export default Title;
