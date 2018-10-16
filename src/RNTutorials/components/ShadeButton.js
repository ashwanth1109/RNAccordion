import React, { Component } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";

import { s, cs, colors } from "./../../styles";
import PropTypes from "prop-types";

const Button = props => (
  <View style={[cs.button.container]}>
    <Text style={[cs.button.text]}>{props.label}</Text>
  </View>
);

const ShadeLayer = () => <View style={[cs.shadeLayer]} />;

class ShadeButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pressed: false
    };

    // this.props = {
    //   width,
    //   height,
    //   buttonColor,
    //   label,
    //   onPress
    // };
  }

  render() {
    return (
      <View style={[s.widthP100, s.height60]}>
        <TouchableWithoutFeedback
          onPressIn={() => this.setState({ pressed: true })}
          onPressOut={() => this.setState({ pressed: false })}
          onPress={() => this.props.onPress()}
        >
          <View style={[s.flex1]}>
            {this.state.pressed ? <ShadeLayer /> : null}
            <Button label={this.props.label} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default ShadeButton;
