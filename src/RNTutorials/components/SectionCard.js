import React, { Component } from "react";

import { Text, View, TouchableWithoutFeedback } from "react-native";
import { s, cs, colors } from "./../../styles";

const ShadeLayer = () => <View style={[cs.shadeClick]} />;

class SectionCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pressed: false
    };
  }

  render() {
    return (
      <View style={[s.widthP100, s.height60, s.flexRow]}>
        <View
          style={[
            s.width15,
            s.heightP100,
            this.props.sideColor ? s.bgAccentP : s.bgAccentT
          ]}
        />
        <View
          style={[
            s.flex3,
            s.paddingH20,
            s.justifyCenter,
            s.borderBottomWidth1,
            this.props.sideColor ? s.borderColorAccentP : s.borderColorAccentT
          ]}
        >
          <Text style={[s.fontSize18, s.fontQuicksandMedium, s.fontColorText]}>
            {this.props.title}
          </Text>
        </View>
        <TouchableWithoutFeedback
          onPressIn={() => this.setState({ pressed: true })}
          onPressOut={() => this.setState({ pressed: false })}
          onPress={() => this.props.onPress()}
        >
          <View
            style={[
              s.flex2,
              this.props.sideColor ? s.bgAccentP : s.bgAccentT,
              s.center
            ]}
          >
            {this.state.pressed ? <ShadeLayer /> : null}
            <Text
              style={[
                s.fontSize18,
                s.fontQuicksandMedium,
                this.props.sideColor ? s.fontColorBackground : s.fontColorText
              ]}
            >
              {`Lesson ${this.props.lesson}`}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default SectionCard;
