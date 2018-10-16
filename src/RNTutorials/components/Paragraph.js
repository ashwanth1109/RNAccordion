import React, { Component } from "react";

import { Text, View } from "react-native";
import { s, cs, colors } from "./../../styles";

class Paragraph extends Component {
  render() {
    return (
      <View style={[cs.paragraph.container, this.props.style]}>
        <Text style={[cs.paragraph.text]}>{this.props.paragraphText}</Text>
      </View>
    );
  }
}

export default Paragraph;
