import React, { Component } from "react";

import { Text, View } from "react-native";
import { s, cs, colors } from "./../../styles";

/*
    COMPONENT
    <Spacer
        type="h"
        height=100/>

    PROPS
    changeValue: "h" or "w"
    height: value
    width: value
*/

class Spacer extends Component {
  render() {
    if (this.props.changeValue === "h") {
      return <View style={[s.widthP100, { height: this.props.height }]} />;
    } else if (this.props.changeValue === "w") {
      return <View style={[s.heightP100, { width: this.props.width }]} />;
    }
  }
}

export default Spacer;
